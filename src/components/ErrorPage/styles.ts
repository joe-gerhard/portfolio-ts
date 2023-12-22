import styled, { css } from "styled-components";

export const StyledErrorPage = styled.div(
    ({ theme }) => css`
        height: 100vh;
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        justify-content: center;
        align-items: center;

        h1 {
            color: ${theme.primary};
        }

        i {
            background-color: ${theme.light};
            padding: 0.25em 1em;
            color: ${theme.dark};
            text-transform: uppercase;
        }
    `,
);
