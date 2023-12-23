import styled, { css } from "styled-components";
import { Section } from "../../styles";
import { breakpoints } from "../../constants/breakpoints";

export const StyledContactSection = styled(Section)(
    () => css`
        width: 100%;
        align-items: flex-start;
        text-align: left;

        p {
            margin-bottom: 1.5rem;
            max-width: 500px;
            line-height: 24px;
        }

        @media (min-width: ${breakpoints.small}) {
            align-items: center;
            text-align: center;
        }
    `,
);
