"use client";

import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Formik, Form } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "@/components/common/Container";
import Title from "@/components/common/Title";
import Section from "@/components/common/Section";
import InputField from "./InputField";
import { validate } from "./validation";
import { Text, Flex, Center, Button } from "./styles";

const ContactForm = () => {
  return (
    <Section sectionId="contact">
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
          onSubmit={(values, actions) => {
            console.log("Contact form submission:", values);
            toast.success("Thanks! Your message has been logged to the console.", {
              position: "bottom-center",
            });
            actions.resetForm();
          }}
        >
          <Form>
            <InputField label="Name" name="name" type="text" />
            <InputField label="Email" name="email" type="email" />
            <InputField label="Message" isTextArea name="message" />
            <Center>
              <Button type="submit">Send Now</Button>
            </Center>
          </Form>
        </Formik>
      </Container>
      <ToastContainer />
    </Section>
  );
};

export default ContactForm;
