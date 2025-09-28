import Hero from "../components/aboutpage/Hero";
import { Journey } from "../components/aboutpage/Journey";
import { TeamMembers } from "../components/aboutpage/TeamMember";
import { TimeLine } from "../components/aboutpage/Timeline";
import { Values } from "../components/aboutpage/Values";

const AboutPages = () => {
    return (
        <>
            <Hero />
            <Journey />
            <TimeLine />
            <Values />
            <TeamMembers />
        </>
    )
}

export default AboutPages