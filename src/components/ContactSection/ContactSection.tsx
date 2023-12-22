import { MutableRefObject } from "react";
import { StyledContactSection } from "./styles";
import Button from "../Button";
import SocialBar from "../SocialBar";
import SectionHeader from "../SectionHeader";
import { emailMe } from "../../utils";

interface ContactSectionProps {
    contactRef: MutableRefObject<HTMLElement | null>;
}

export default function ContactSection({ contactRef }: ContactSectionProps) {
    return (
        <StyledContactSection ref={contactRef}>
            <SectionHeader $textAlign="center">Contact</SectionHeader>
            <SocialBar />
            <p>
                I am actively seeking new work opportinities, so please feel
                free to reach out any time. Looking forward to hearing from you!
            </p>
            <Button $dark onClick={emailMe}>
                Email
            </Button>
        </StyledContactSection>
    );
}
