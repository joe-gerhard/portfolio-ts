import { PropsWithChildren } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends PropsWithChildren {
    readonly $margin?: string;
    readonly $dark?: boolean;
    readonly $menu?: boolean;
    readonly $hide?: boolean;
    onClick?: () => void;
}

export default function Button({ children, ...props }: ButtonProps) {
    return <StyledButton {...props}>{children}</StyledButton>;
}
