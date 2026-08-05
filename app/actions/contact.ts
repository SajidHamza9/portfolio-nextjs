"use server";

import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";
import { validate } from "@/components/ContactForm/validation";

type ContactValues = {
  name: string;
  email: string;
  message: string;
};

type ContactResult = { ok: true } | { ok: false; error: string };

const RECAPTCHA_MIN_SCORE = 0.5;

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret || !token) return false;

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = (await res.json()) as {
      success?: boolean;
      score?: number;
      action?: string;
    };
    return (
      data.success === true &&
      (data.score ?? 0) >= RECAPTCHA_MIN_SCORE &&
      data.action === "contact"
    );
  } catch (err) {
    console.error("reCAPTCHA verification error:", err);
    return false;
  }
}

export async function sendContact(
  values: ContactValues,
  recaptchaToken: string,
): Promise<ContactResult> {
  // 1. Bot gate — verify reCAPTCHA before doing any work.
  const human = await verifyRecaptcha(recaptchaToken);
  if (!human) {
    return {
      ok: false,
      error: "reCAPTCHA verification failed. Please try again.",
    };
  }

  // 2. Server-side validation (reuse the shared Yup schema).
  let clean: ContactValues;
  try {
    clean = await validate.validate(
      {
        name: values.name?.trim(),
        email: values.email?.trim(),
        message: values.message?.trim(),
      },
      { abortEarly: true },
    );
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Invalid form submission.";
    return { ok: false, error: message };
  }

  // 3. Send the email via Resend.
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.CONTACT_TO_EMAIL!;
    // Must be an address at a domain verified in Resend. Falls back to the
    // sandbox sender when unset (only delivers to your own account's email).
    const from = process.env.CONTACT_FROM_EMAIL!;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: clean.email,
      subject: `New portfolio message from ${clean.name}`,
      react: ContactEmail({
        name: clean.name,
        email: clean.email,
        message: clean.message,
      }),
      text: `New portfolio message\n\nName: ${clean.name}\nEmail: ${clean.email}\n\n${clean.message}`,
    });

    if (error) {
      console.error("Resend send error:", error);
      return { ok: false, error: "Something went wrong sending your message." };
    }

    return { ok: true };
  } catch (err) {
    console.error("Contact send error:", err);
    return { ok: false, error: "Something went wrong sending your message." };
  }
}
