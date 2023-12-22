import styled, { css } from "styled-components";
import { Section } from "../../styles";
import { breakpoints } from "../../constants/breakpoints";

export const StyledHomeSection = styled(Section)(
    ({ theme }) => css`
        width: 100%;
    `,
);

export const Card = styled.div(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;

        h1 {
            font-size: 80px;
            margin-top: 5rem;

            @media (max-width: 600px) {
                font-size: 65px;
                margin: 0;
            }

            @media (max-width: ${breakpoints.small}) {
                font-size: 55px;
            }

            @media (max-width: 400px) {
                font-size: 45px;
            }
            @media (max-width: 330px) {
                font-size: 40px;
            }

            & > span {
                font-size: 24px;
                color: ${theme.accent};

                @media (max-width: 600px) {
                    font-size: 18px;
                }

                @media (max-width: 330px) {
                    font-size: 16px;
                }
            }
        }

        p {
            display: flex;
            font-size: 16px;
            margin: 40px 0;
            line-height: 24px;
            max-width: 500px;
            text-align: left;
        }
    `,
);
