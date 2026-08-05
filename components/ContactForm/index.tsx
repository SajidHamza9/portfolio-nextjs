"use client";

import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Formik, Form } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { Container } from "@/components/common/Container";
import Title from "@/components/common/Title";
import Section from "@/components/common/Section";
import { sendContact } from "@/app/actions/contact";
import InputField from "./InputField";
import { validate } from "./validation";
import { Text, Flex, Center, Button, Disclaimer } from "./styles";

const toastOptions = { position: "bottom-center" as const };

const ContactFormInner = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  return (
    <>
      <Container $maxWidth="lg">
        <Title>Contact Me</Title>
      </Container>
      <Container $maxWidth="md">
        <Text>
          Interested in hiring me for your project or just want to say hi? You
          can fill in the contact form below or send me an email to{" "}
          <span>sajidhaamza@gmail.com</span>
        </Text>
        <Text>
          Want to get connected? Follow me on the social channels below.
        </Text>
        <Flex>
          <a href="https://www.instagram.com/7amza.hs/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-sajid-65b587206/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/SajidHamza9?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </Flex>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={validate}
          onSubmit={async (values, actions) => {
            try {
              if (!executeRecaptcha) {
                toast.error(
                  "reCAPTCHA is not ready yet. Please try again in a moment.",
                  toastOptions,
                );
                return;
              }
              const token = await executeRecaptcha("contact");
              const res = await sendContact(values, token);
              if (res.ok) {
                toast.success(
                  "Thanks! Your message has been sent.",
                  toastOptions,
                );
                actions.resetForm();
              } else {
                toast.error(res.error, toastOptions);
              }
            } catch {
              toast.error(
                "Something went wrong. Please email me directly.",
                toastOptions,
              );
            } finally {
              actions.setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField label="Name" name="name" type="text" />
              <InputField label="Email" name="email" type="email" />
              <InputField label="Message" isTextArea name="message" />
              <Center>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Now"}
                </Button>
              </Center>
              <Disclaimer>
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms of Service
                </a>{" "}
                apply.
              </Disclaimer>
            </Form>
          )}
        </Formik>
      </Container>
      <ToastContainer />
    </>
  );
};

const ContactForm = () => (
  <Section sectionId="contact">
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
      scriptProps={{ async: true, defer: true, appendTo: "body" }}
    >
      <ContactFormInner />
    </GoogleReCaptchaProvider>
  </Section>
);

export default ContactForm;
