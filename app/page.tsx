import Intro from "@/components/Intro";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Intro />
      <AboutMe />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <ContactForm />
    </>
  );
}
