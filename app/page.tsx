import Certificates from "@/components/templates/certificates";
import ContactMe from "@/components/templates/contactme";
import Github from "@/components/templates/github";
import Home from "@/components/templates/home";
import Projects from "@/components/templates/projects";
import Technology from "@/components/templates/technology";

export default function Page() {
  return (
    <>
      <Home />
      <Technology />
      <Projects />

      <Github />

      <Certificates />
      <ContactMe />
    </>
  );
}
