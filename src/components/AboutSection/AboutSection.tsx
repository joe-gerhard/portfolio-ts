import React from "react";
import { StyledAboutSection, Text, Card, ImageContainer } from "./styles";
import SectionHeader from "../SectionHeader";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const AboutSection = ({ aboutRef }) => {
    const isIntersecting = useIntersectionObserver(aboutRef, "-50%");

    return (
        <StyledAboutSection ref={aboutRef}>
            <SectionHeader>About me</SectionHeader>
            <Card>
                <Text $active={isIntersecting}>
                    <p>
                        Rooted in the dynamic world of event production, I've
                        cultivated skills in problem-solving, clean code, and
                        design aesthetics. Valuing meaningful connections and
                        relishing the thrill of overcoming challenges, I offer a
                        unique perspective to the software engineering
                        landscape.
                    </p>

                    <p>
                        Graduating at the top of my class from General
                        Assembly's Software Engineering Immersive program, I've
                        earned a reputation for quick adaptability and a keen
                        ability to swiftly grasp new concepts. This talent for
                        efficiently navigating complex tasks has consistently
                        characterized my career, showcasing a commitment to
                        staying agile in an ever-evolving field.
                    </p>

                    <p>
                        My professional journey includes a pivotal role at
                        ArgonDigital as a Technical Specialist III, where I
                        contributed to developing dynamic websites and
                        successfully revitalized a challenging M-Files project.
                    </p>

                    <p>
                        A recipient of a full-ride academic scholarship from
                        Arizona State University, my drive for continuous
                        improvement fuels my enthusiasm for contributing diverse
                        backgrounds and technical skills to innovative projects.
                    </p>
                </Text>
                <ImageContainer $hover={isIntersecting}>
                    <img src="/Small-Square.png" alt="Joe Gerhard" />
                </ImageContainer>
            </Card>
        </StyledAboutSection>
    );
};

export default AboutSection;
