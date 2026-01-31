import Navbar from "./navbar";
import Hero from "./hero";
import AboutMe from "./aboutme";
import MySkills from "./MySkills";
import MyProjects from "./MyProjects";
import ContactInfo from "./ContactInfo";
import Footer from "./footer";
import Certifications from "./Certifications";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <MySkills />
      <MyProjects />
      <Certifications />
      <ContactInfo />
      <Footer />
    </div>
  );
}
