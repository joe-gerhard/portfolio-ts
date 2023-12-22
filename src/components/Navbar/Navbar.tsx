import React from "react";
import { StyledNav, StyledLink, Icon, Menu } from "./styles";
import Button from "../Button";
import { useState } from "react";

const Navbar = ({
    executeScroll,
    aboutRef,
    experienceRef,
    projectsRef,
    contactRef,
    visible,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenResume = () => {
        window.open("/joe_gerhard_resume.pdf", "_blank");
    };

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <StyledNav $visible={visible} $isOpen={isOpen}>
            <StyledLink onClick={() => executeScroll(aboutRef)}>
                About
            </StyledLink>
            <StyledLink onClick={() => executeScroll(experienceRef)}>
                Experience
            </StyledLink>
            <StyledLink onClick={() => executeScroll(projectsRef)}>
                Projects
            </StyledLink>
            <StyledLink onClick={() => executeScroll(contactRef)}>
                Contact
            </StyledLink>
            <Button $dark $hide onClick={handleOpenResume} $margin={"20px"}>
                Resumé
            </Button>
            <Icon icon="fa fa-bars" onClick={handleToggleMenu} />
            <Menu $isOpen={isOpen} onClick={handleToggleMenu}>
                <StyledLink $menu onClick={() => executeScroll(aboutRef)}>
                    About
                </StyledLink>
                <StyledLink $menu onClick={() => executeScroll(experienceRef)}>
                    Experience
                </StyledLink>
                <StyledLink $menu onClick={() => executeScroll(projectsRef)}>
                    Projects
                </StyledLink>
                <StyledLink $menu onClick={() => executeScroll(contactRef)}>
                    Contact
                </StyledLink>
                <Button $dark $menu onClick={handleOpenResume} $margin={"20px"}>
                    Resumé
                </Button>
            </Menu>
        </StyledNav>
    );
};

export default Navbar;
