import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

const colors = {
  bg: "#111233",
  panel: "#1a1b4b",
  accent: "#04e8b9",
  text: "#b0c8dd",
  heading: "#ffffff",
};

const ContactEmail = ({ name, email, message }: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>New portfolio message from {name}</Preview>
    <Body style={body}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={brand}>Hamza Sajid</Heading>
          <Text style={subtitle}>New portfolio message</Text>
        </Section>
        <Hr style={hr} />
        <Section>
          <Text style={label}>Name</Text>
          <Text style={value}>{name}</Text>

          <Text style={label}>Email</Text>
          <Text style={value}>
            <Link href={`mailto:${email}`} style={emailLink}>
              {email}
            </Link>
          </Text>

          <Text style={label}>Message</Text>
          <Text style={{ ...value, whiteSpace: "pre-wrap" }}>{message}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>Sent from the portfolio contact form.</Text>
      </Container>
    </Body>
  </Html>
);

ContactEmail.PreviewProps = {
  name: "Jane Doe",
  email: "jane@example.com",
  message: "Hi Hamza,\n\nI'd love to work with you on a project.",
} satisfies ContactEmailProps;

export default ContactEmail;

const body: React.CSSProperties = {
  backgroundColor: colors.bg,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  padding: "24px 0",
};

const container: React.CSSProperties = {
  backgroundColor: colors.panel,
  border: `1px solid ${colors.accent}`,
  borderRadius: "8px",
  maxWidth: "560px",
  margin: "0 auto",
  padding: "32px",
};

const header: React.CSSProperties = {
  textAlign: "center",
};

const brand: React.CSSProperties = {
  color: colors.accent,
  fontSize: "24px",
  fontWeight: 700,
  margin: "0",
  letterSpacing: "0.5px",
};

const subtitle: React.CSSProperties = {
  color: colors.heading,
  fontSize: "16px",
  margin: "4px 0 0",
};

const hr: React.CSSProperties = {
  borderColor: "rgba(176, 200, 221, 0.2)",
  margin: "24px 0",
};

const label: React.CSSProperties = {
  color: colors.accent,
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.6px",
  margin: "0 0 4px",
};

const value: React.CSSProperties = {
  color: colors.text,
  fontSize: "15px",
  lineHeight: "1.5",
  margin: "0 0 16px",
};

const emailLink: React.CSSProperties = {
  color: colors.accent,
  textDecoration: "none",
};

const footer: React.CSSProperties = {
  color: "rgba(176, 200, 221, 0.6)",
  fontSize: "12px",
  textAlign: "center",
  margin: "0",
};
