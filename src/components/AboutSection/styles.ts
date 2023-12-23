import styled, { css } from "styled-components";
import { Section } from "../../styles";
import { breakpoints } from "../../constants/breakpoints";

export const StyledAboutSection = styled(Section)(
    () => css`
        width: 100%;
    `,
);

export const Card = styled.div(
    () => css`
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: flex-start;
        gap: 1.5rem;
        width: 100%;

        @media (min-width: ${breakpoints.large}) {
            flex-direction: row;
            align-items: flex-start;
            gap: 3rem;
        }
    `,
);

interface TextProps {
    readonly $active: boolean;
}

export const Text = styled.div<TextProps>(
    ({ $active }) => css`
        display: flex;
        flex-direction: column;
        width: 60%;

        @media (max-width: ${breakpoints.large}) {
            width: 100%;
            margin-bottom: 20px;
        }

        div {
            display: flex;

            @media (max-width: ${breakpoints.small}) {
                justify-content: space-around;
            }
        }

        p {
            position: relative;
            line-height: 24px;
            margin-bottom: 20px;
            text-align: left;
            opacity: ${$active ? 1 : 0};
            top: ${$active ? 0 : "1.5rem"};
            transition: all 1s ease-in-out;
        }
    `,
);

interface ImageContainerProps {
    readonly $hover: boolean;
}

export const ImageContainer = styled.div<ImageContainerProps>(
    ({ theme, $hover }) => css`
        position: relative;
        width: 40%;

        @media (max-width: ${breakpoints.large}) {
            width: 70%;
        }

        @media (max-width: 600px) {
            width: 100%;
        }

        img {
            filter: ${$hover ? "grayscale(0)" : "grayscale(1)"};
            transition: 2s;
            object-fit: fill;
            width: 100%;
            height: 100%;
        }

        div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${$hover ? "transparent" : theme.accent + "55"};
            transition: 2s;
        }
    `,
);
