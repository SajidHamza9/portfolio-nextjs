import Intro from "@/components/Intro";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Intro />
      <AboutMe />
      <Skills />
      <Services />
      <Projects />
      <ContactForm />
    </>
  );
}
