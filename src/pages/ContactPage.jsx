import { Consultan } from "../components/contactpage/Consultan";
import { ContactSection } from "../components/contactpage/Contact";
import { FAQ } from "../components/contactpage/FAQ";
import { Hero } from "../components/contactpage/Hero";

const Contact = () => {
    return (
        <>
            <Hero />
            <ContactSection />
            <Consultan />
            <FAQ />
        </>
    );
};

export default Contact;