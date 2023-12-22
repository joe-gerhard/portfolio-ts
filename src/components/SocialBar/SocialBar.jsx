import React from "react";
import { StyledSocialBar } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialBar = () => {
    return (
        <StyledSocialBar>
            <a
                href="https://www.github.com/joe-gerhard"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
            <a
                href="https://www.linkedin.com/in/joe-gerhard"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
            </a>
            <a
                href="https://www.facebook.com/profile.php?id=10044811"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
            </a>
            <a
                href="https://www.instagram.com/joedoesnotsuckatlife/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </a>
            <a
                href="https://twitter.com/joegerhard"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </a>
        </StyledSocialBar>
    );
};

export default SocialBar;
