import { StyledSocialBar } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialBar() {
    return (
        <StyledSocialBar>
            <a
                href="https://www.github.com/joe-gerhard"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a
                href="https://www.linkedin.com/in/joe-gerhard"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
            <a
                href="https://www.facebook.com/profile.php?id=10044811"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </a>
            <a
                href="https://www.instagram.com/joedoesnotsuckatlife/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a
                href="https://twitter.com/joegerhard"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
        </StyledSocialBar>
    );
}
