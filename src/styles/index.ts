import styled, { css } from "styled-components";
import { breakpoints } from "../constants/breakpoints";

export const Section = styled.section(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        color: ${theme.dark};
        min-height: calc(100vh - 7rem);
        margin-bottom: 7rem;
        scroll-margin: 1.5rem;

        &:last-child {
            min-height: 0vh;
            margin-bottom: 1.5rem;
        }

        @media (min-width: ${breakpoints.small}) {
            scroll-margin: 7rem;

            &:last-child {
                margin-bottom: 5rem;
            }
        }
    `,
);
