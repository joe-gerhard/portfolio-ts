import React from "react";
import { StyledHomeSection, Card } from "./styles";
import Button from "../Button";

const HomeSection = () => {
    const handleEmailMe = () => {
        window.open("mailto:JLGerhard@gmail.com", "_blank");
    };

    return (
        <StyledHomeSection>
            <Card>
                <h1>
                    <span>Hi, my name is</span>
                    <br />
                    Joe Gerhard
                </h1>
                <p>
                    I'm a Frontend Developer with 3+ years of experience
                    delivering pixel-perfect designs and highly maintainable
                    code while working in a distributed environment with both
                    large and small teams. I'm also a former music industry
                    professional with over 10 years of road-tested experience in
                    Lighting Design, Audio Engineering, and Tour Management
                    resulting in a unique creative perspective and a deep
                    appreciation for connecting with people from all walks of
                    life.
                </p>
                <Button $dark onClick={handleEmailMe}>
                    Get in Touch
                </Button>
            </Card>
        </StyledHomeSection>
    );
};

export default HomeSection;
