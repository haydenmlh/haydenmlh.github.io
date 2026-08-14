import { useEffect } from "react";

export default function useTypewriterName(enabled) {
    useEffect(() => {
        if (!enabled) {
            return;
        }

        const target = document.getElementById("header-name");
        if (!target) {
            return;
        }

        const text = "Hayden Mak";
        target.textContent = "";

        let index = 0;
        let timeoutId;

        const type = () => {
            if (index < text.length) {
                target.textContent += text.charAt(index);
                index += 1;
                timeoutId = window.setTimeout(type, Math.floor(Math.random() * 40) + 50);
            }
        };

        type();

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [enabled]);
}
