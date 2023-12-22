import styled, { css } from "styled-components";
import { Section } from "../../styles";
import { breakpoints } from "../../constants/breakpoints";

export const StyledContactSection = styled(Section)(
    ({ theme }) => css`
        width: 100%;

        p {
            margin-bottom: 1.5rem;
            max-width: 500px;
            line-height: 24px;

            @media (max-width: ${breakpoints.medium}) {
                margin-top: 10px;
            }
        }
    `,
);
