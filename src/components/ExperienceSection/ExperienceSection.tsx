import { useState } from "react";
import {
    StyledExperienceSection,
    ExperienceWrapper,
    Buttons,
    ExpButton,
} from "./styles";
import Description from "./Description";
import { JOBS } from "../../constants/jobs";
import SectionHeader from "../SectionHeader";

interface ExperienceSectionProps {
    experienceRef: React.MutableRefObject<HTMLElement | null>;
}

export default function ExperienceSection({
    experienceRef,
}: ExperienceSectionProps) {
    const [selected, setSelected] = useState(0);

    return (
        <StyledExperienceSection ref={experienceRef}>
            <SectionHeader>Experience</SectionHeader>
            <ExperienceWrapper>
                <Buttons>
                    {JOBS.map((job, idx) => (
                        <ExpButton
                            key={job.name}
                            $selected={selected === idx}
                            onClick={() => setSelected(idx)}
                        >
                            {job.name}
                        </ExpButton>
                    ))}
                </Buttons>
                <Description $selected={selected} />
            </ExperienceWrapper>
        </StyledExperienceSection>
    );
}
