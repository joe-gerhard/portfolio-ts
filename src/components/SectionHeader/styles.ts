import styled, { css } from "styled-components";

export const StyledSectionHeader = styled.h2(
    ({ theme, $textAlign, $isIntersecting }) => css`
        text-align: ${$textAlign ? $textAlign : "left"};
        width: ${$isIntersecting ? "100%" : "0%"};
        white-space: nowrap;
        align-self: ${$textAlign === "center" ? "center" : "flex-start"};
        border-bottom: 2px solid ${theme.primary};
        color: ${theme.primary};
        margin-bottom: 3rem;
        transition: 2s;
        opacity: ${$isIntersecting ? 1 : 0};
    `,
);
