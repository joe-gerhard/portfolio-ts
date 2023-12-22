import styled, { css } from "styled-components";
import { breakpoints } from "../../constants/breakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface StyledNavProps {
    readonly $visible: boolean;
    readonly $isOpen: boolean;
}

export const StyledNav = styled.nav<StyledNavProps>(
    ({ theme, $visible, $isOpen }) => css`
        position: fixed;
        top: ${$visible || $isOpen ? "0" : "-60px"};
        z-index: 100;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background: ${theme.primary};
        height: 60px;
        width: 100%;
        transition: 0.5s;

        &:hover {
            cursor: default;
        }
    `,
);

interface StyledLinkProps {
    readonly $menu?: boolean;
}

export const StyledLink = styled.span<StyledLinkProps>(
    ({ theme, $menu }) => css`
        margin: 0 10px;
        margin-bottom: ${$menu ? "40px" : 0};
        color: ${theme.light};
        transition: 0.5s;

        &:hover {
            cursor: pointer;
            color: ${theme.accent};
        }

        &:first-child {
            margin-top: ${$menu ? "40px" : 0};
        }

        &:last-child {
            margin-right: 20px;
        }

        @media (max-width: ${breakpoints.medium}) {
            display: ${$menu ? "block" : "none"};
        }
    `,
);

export const Icon = styled(FontAwesomeIcon)(
    ({ theme }) => css`
        font-size: 36px;
        color: ${theme.light};
        margin: 0 20px;
        display: none;

        @media (max-width: ${breakpoints.medium}) {
            display: block;
        }
    `,
);

interface StyledMenuProps {
    readonly $isOpen: boolean;
}

export const Menu = styled.div<StyledMenuProps>(
    ({ theme, $isOpen }) => css`
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height: calc(100vh - 60px);
        width: 50vw;
        background: ${theme.primaryVariant};
        transition: 0.3s;

        @media (max-width: ${breakpoints.medium}) {
            display: flex;
            position: fixed;
            top: 60px;
            right: ${$isOpen ? 0 : "-50vw"};
        }

        @media (max-width: ${breakpoints.small}) {
            width: 80vw;
            right: ${$isOpen ? 0 : "-80vw"};
        }
    `,
);
