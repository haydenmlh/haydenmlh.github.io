import { useEffect } from "react";

export default function useContentHeaderParallax(enabled) {
    useEffect(() => {
        if (!enabled) {
            return;
        }

        const resizeContentHeader = () => {
            const target = document.getElementById("content-header-img");
            if (!target) {
                return;
            }

            const scrollTop = document.scrollingElement ? document.scrollingElement.scrollTop : window.scrollY;
            const width = target.offsetWidth;
            const height = target.offsetHeight;
            const xValue = -(1368 - width) / 2 - 0.04 * scrollTop;
            const yValue = -(912 - height) / 2 - scrollTop * 0.04;

            target.style.backgroundPosition = `${xValue}px ${yValue}px`;
        };

        window.addEventListener("scroll", resizeContentHeader, { passive: true });
        window.addEventListener("resize", resizeContentHeader);
        resizeContentHeader();

        return () => {
            window.removeEventListener("scroll", resizeContentHeader);
            window.removeEventListener("resize", resizeContentHeader);
        };
    }, [enabled]);
}
