import styled, { css } from "styled-components";

export const StyledFooter = styled.footer(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 10px;
        align-items: center;
        background: ${theme.primary};
        color: ${theme.light};
        height: 6rem;
        width: 100vw;
        font-size: 0.9rem;
        line-height: 1.25em;

        div {
            margin-bottom: 10px;
        }

        a {
            color: ${theme.light};
            transition: 0.3s;
            text-decoration: underline;

            &:hover {
                color: ${theme.accent};
            }
        }
    `,
);
