import { FC, PropsWithChildren, useRef } from "react";
import { StyledSectionHeader } from "./styles";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface SectionHeaderProps extends PropsWithChildren {
    readonly $textAlign?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ children, ...props }) => {
    const ref = useRef(null);
    const isIntersecting = useIntersectionObserver(ref);

    return (
        <StyledSectionHeader
            ref={ref}
            $isIntersecting={isIntersecting}
            {...props}
        >
            {children}
        </StyledSectionHeader>
    );
};

export default SectionHeader;
