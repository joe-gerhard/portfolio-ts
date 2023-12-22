import { FC, MutableRefObject } from "react";
import { StyledProjectsSection } from "./styles";
import { PROJECTS } from "../../constants/projects";
import Project from "./Project";
import SectionHeader from "../SectionHeader";

interface ProjectsSectionProps {
    projectsRef: MutableRefObject<HTMLElement | null>;
}

const ProjectsSection: FC<ProjectsSectionProps> = ({ projectsRef }) => {
    return (
        <StyledProjectsSection ref={projectsRef}>
            <SectionHeader>Projects</SectionHeader>
            {PROJECTS.map((project) => (
                <Project key={project.name} project={project} />
            ))}
        </StyledProjectsSection>
    );
};

export default ProjectsSection;
