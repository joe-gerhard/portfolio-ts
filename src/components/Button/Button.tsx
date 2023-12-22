import { FC, PropsWithChildren } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends PropsWithChildren {
    readonly $margin?: string;
    readonly $dark?: boolean;
    readonly $menu?: boolean;
    readonly $hide?: boolean;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
