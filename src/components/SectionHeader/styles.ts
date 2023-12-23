import styled, { css } from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

interface StyledSectionHeaderProps {
    readonly $textAlign?: string;
    readonly $isIntersecting: boolean;
}

export const StyledSectionHeader = styled.h2<StyledSectionHeaderProps>(
    ({ theme, $textAlign, $isIntersecting }) => css`
        width: ${$isIntersecting ? "100%" : "0"};
        border-bottom: 3px solid ${theme.primary};
        margin-bottom: 1.5rem;
        align-self: flex-start;

        color: ${theme.primary};
        text-align: left;
        font-size: 2.5rem;
        font-weight: 500;
        white-space: nowrap;

        opacity: ${$isIntersecting ? 1 : 0};

        transition: 2s;

        @media (min-width: ${breakpoints.small}) {
            align-self: ${$textAlign === "center" ? "center" : "flex-start"};
            text-align: ${$textAlign ? $textAlign : "left"};
            margin-bottom: 3rem;
        }
    `,
);
