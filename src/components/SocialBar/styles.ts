import styled, { css } from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const StyledSocialBar = styled.div(
    ({ theme }) => css`
        position: fixed;
        top: 100px;
        left: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40px;
        background: transparent;

        @media (max-width: ${breakpoints.medium}) {
            position: relative;
            flex-direction: row;
            justify-content: center;
            top: 0;
            left: 0;
            width: 100%;
        }

        a {
            position: relative;
            bottom: 0;
            color: ${theme.light};
            font-size: 24px;
            margin: 5px 0;
            transition: 0.3s;

            &::after {
                content: "";
                background-color: black;
                border-radius: 50%;
                height: 0.2em;
                width: 1.5em;
                position: absolute;
                bottom: 0;
                left: 50%;
                translate: -50% 0;
                opacity: 0;
                z-index: -1;
                transition: 0.3s;
                box-shadow: 0 0 3px 1px black;
            }

            @media (max-width: ${breakpoints.medium}) {
                margin: 20px 10px 0 10px;
            }

            &:hover {
                color: ${theme.accent};
                bottom: 3px;
            }

            &:hover::after {
                opacity: 0.15;
                bottom: -3px;
                width: 0.7em;
            }

            &:last-child {
                margin-bottom: 60px;

                @media (max-width: ${breakpoints.medium}) {
                    margin-bottom: 0;
                }
            }
        }
    `,
);
