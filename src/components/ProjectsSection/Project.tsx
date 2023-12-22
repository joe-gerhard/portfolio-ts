import { FC, useRef } from "react";
import {
    Description,
    Text,
    Technologies,
    Icons,
    ImageContainer,
    StyledProject,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { project } from "../../constants/projects";

interface ProjectProps {
    project: project;
}

const Project: FC<ProjectProps> = ({ project }) => {
    const ref = useRef(null);
    const isIntersecting = useIntersectionObserver(ref, "-25%");

    return (
        <StyledProject ref={ref}>
            <ImageContainer
                $hover={isIntersecting}
                onClick={() => window.open(project.link)}
            >
                <img src={project.image} alt={project.name} />
            </ImageContainer>
            <Text>
                <h3>Featured Project</h3>
                <h2>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.name}
                    </a>
                </h2>
                <Description $hover={isIntersecting}>
                    {project.description}
                </Description>
                <Technologies>
                    {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </Technologies>
                <Icons>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon="external-link-alt" />
                    </a>
                </Icons>
            </Text>
        </StyledProject>
    );
};

export default Project;
