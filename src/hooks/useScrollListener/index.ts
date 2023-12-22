import { useState, useEffect } from "react";

export interface ScrollData {
    readonly x: number;
    readonly y: number;
    readonly lastX: number;
    readonly lastY: number;
}

export default function useScrollListener(): ScrollData {
    const [data, setData] = useState<ScrollData>({
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0,
    });

    // set up event listeners
    useEffect(() => {
        const handleScroll = () => {
            setData((last) => {
                return {
                    x: window.scrollX,
                    y: window.scrollY,
                    lastX: last.x,
                    lastY: last.y,
                };
            });
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return data;
}
