import styled, { css } from "styled-components";
import { Section } from "../../styles";
import { breakpoints } from "../../constants/breakpoints";

export const StyledProjectsSection = styled(Section)(
    () => css`
        width: 100%;

        p {
            padding: 40px;
            line-height: 24px;
        }
    `,
);

export const StyledProject = styled.div(
    ({ theme }) => css`
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        margin-bottom: 1.5rem;
        height: 350px;
        border: 1px solid ${theme.dark + "11"};
        box-shadow: 0 10px 8px 1px ${theme.primary + "44"};
        border-radius: 1rem;

        @media (min-width: ${breakpoints.small}) {
            margin-bottom: 7rem;
            border: none;
            border-radius: 0;
            box-shadow: none;
        }

        h3 {
            text-align: left;
            margin-top: 30px;
            margin-left: 20px;
            color: ${theme.accent};

            @media (max-width: ${breakpoints.medium}) {
                text-align: right;
                padding-right: 40px;
            }

            @media (max-width: ${breakpoints.small}) {
                font-size: 1rem;
                padding-right: 1.5rem;
            }
        }

        h2 {
            margin-top: 5px;
            font-size: 24px;
            text-align: left;
            margin-left: 20px;
            font-weight: 900;

            @media (max-width: ${breakpoints.medium}) {
                text-align: right;
                padding-right: 40px;
            }

            @media (max-width: ${breakpoints.small}) {
                font-size: 1.5rem;
                padding-right: 1.5rem;
            }
        }

        a {
            color: ${theme.dark};
            transition: 0.3s;

            &:hover {
                color: ${theme.accent};
                cursor: pointer;
            }
        }
    `,
);

interface DescriptionProps {
    readonly $hover: boolean;
}

export const Description = styled.div<DescriptionProps>(
    ({ theme, $hover }) => css`
        position: absolute;
        display: flex;
        align-items: center;
        height: 80px;
        line-height: 20px;
        top: 30%;
        right: ${$hover ? "20px" : "0"};
        width: 60%;
        z-index: 1;
        padding: 5rem 2rem;
        background: ${theme.primary};
        color: ${theme.light};
        transition: 1s;
        box-shadow: 0 5px 15px 0 ${theme.dark + "99"};

        @media (max-width: ${breakpoints.medium}) {
            background: transparent;
            right: 0;
            color: ${theme.dark};
            width: 85%;
            text-align: right;
            font-size: 18px;
            top: 20%;
        }

        @media (max-width: ${breakpoints.small}) {
            font-size: 14px;
            padding-right: 20px;
            top: 25%;
            box-shadow: none;
        }
    `,
);

interface TextProps {
    readonly $hover: boolean;
}

export const Text = styled.div<TextProps>(
    ({ $hover }) => css`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        opacity: ${$hover ? 1 : 0};
        transition: 1.5s;
    `,
);

export const Technologies = styled.div`
    margin-top: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    line-height: 20px;

    span {
        font-size: 12px;
        margin-left: 20px;
    }

    @media (max-width: ${breakpoints.medium}) {
        justify-content: flex-end;
        padding-right: 40px;
    }

    @media (max-width: ${breakpoints.small}) {
        padding-right: 20px;
    }
`;

export const Icons = styled.div(
    ({ theme }) => css`
        font-size: 24px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        margin: 10px 0 20px 10px;

        @media (max-width: ${breakpoints.medium}) {
            justify-content: flex-end;
            padding-right: 40px;
        }

        @media (max-width: ${breakpoints.small}) {
            padding-right: 20px;
        }

        a {
            position: relative;
            bottom: 0;
            color: ${theme.dark};
            margin-left: 10px;
            transition: 0.3s;
            z-index: 1;

            &:hover {
                color: ${theme.accent};
                bottom: 3px;
            }

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
                z-index: 0;
                transition: 0.3s;
                box-shadow: 0 0 3px 1px black;
            }

            &:hover::after {
                opacity: 0.3;
                bottom: -3px;
                width: 0.7em;
            }
        }
    `,
);

interface ImageContainerProps {
    readonly $hover: boolean;
}

export const ImageContainer = styled.div<ImageContainerProps>(
    ({ theme, $hover }) => css`
        position: relative;
        max-width: 50%;
        width: 1000px;
        height: 350px;
        overflow: hidden;
        border-radius: 1rem;

        @media (max-width: ${breakpoints.medium}) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            max-width: 100%;
            z-index: 0;
            border-radius: 1rem;
        }

        &: $hover {
            cursor: pointer;
        }

        img {
            object-fit: cover;
            filter: grayscale(${$hover ? 0 : 1});
            opacity: ${$hover ? 1 : 0.1};
            width: 100%;
            height: 100%;
            transition: 1.75s;

            @media (max-width: ${breakpoints.medium}) {
                filter: contrast(${$hover ? 0.75 : 1})
                    blur(${$hover ? "5px" : 0});
                opacity: ${$hover ? 0.3 : 1};
            }
        }

        div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${$hover ? "transparent" : theme.accent + "11"};
            transition: 1s;

            @media (max-width: ${breakpoints.medium}) {
                background: ${theme.primary + "11"};
            }
        }
    `,
);
