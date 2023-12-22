import { useState, useEffect, MutableRefObject } from "react";

export function useIntersectionObserver(
    ref: MutableRefObject<HTMLElement | null>,
    rootMargin: string = "0px",
): boolean {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, rootMargin]);

    return isIntersecting;
}
