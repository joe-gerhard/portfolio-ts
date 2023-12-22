import styled, { css } from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

interface StyledButtonProps {
    readonly $margin?: string;
    readonly $hide?: boolean;
    readonly $dark?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>(
    ({ theme, $margin, $hide, $dark }) => {
        const color = $dark ? "white" : theme.accent;
        const background = $dark ? theme.accent : "transparent";
        const hoverBackground = $dark ? theme.accentDark : theme.accent;

        return css`
            padding: 10px 20px;
            margin: 0 ${$margin || 0};
            border: 1px solid ${theme.accent};
            border-radius: 3px;
            background: ${background};
            color: ${color};
            font-size: 16px;
            transition: 0.5s;

            &:hover {
                background: ${hoverBackground};
                border: 1px solid ${hoverBackground};
                color: white;
                cursor: pointer;
            }

            @media (max-width: ${breakpoints.medium}) {
                display: ${$hide ? "none" : "block"};
            }
        `;
    },
);
