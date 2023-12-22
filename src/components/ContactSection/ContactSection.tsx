import React from "react";
import { StyledContactSection } from "./styles";
import Button from "../Button";
import SocialBar from "../SocialBar";
import SectionHeader from "../SectionHeader";

const ContactSection = ({ contactRef }) => {
    const handleEmailMe = () => {
        window.open("mailto:JLGerhard@gmail.com", "_blank");
    };

    return (
        <StyledContactSection ref={contactRef}>
            <SectionHeader $textAlign="center">Contact</SectionHeader>
            <SocialBar />
            <p>
                I am actively seeking new work opportinities, so please feel
                free to reach out any time. Looking forward to hearing from you!
            </p>
            <Button $dark onClick={handleEmailMe}>
                Email
            </Button>
        </StyledContactSection>
    );
};

export default ContactSection;
