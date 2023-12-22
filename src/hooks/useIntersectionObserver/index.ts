import { useState, useEffect } from "react";

export function useIntersectionObserver(ref, rootMargin = "0px") {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin },
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, rootMargin]);

    return isIntersecting;
}
