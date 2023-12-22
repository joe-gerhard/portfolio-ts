import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Sections = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    padding: 0 1.5rem;

    @media (min-width: ${breakpoints.medium}) {
        padding: 0 5rem;
    }
`;
