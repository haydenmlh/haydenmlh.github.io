import { useEffect } from "react";

export default function useProjectTilesResize(enabled) {
    useEffect(() => {
        if (!enabled) {
            return;
        }

        const changeWrapperHW = () => {
            const tiles = document.getElementsByClassName("tile");
            const tileTitles = document.getElementsByClassName("tile-title");
            const tileLangs = document.getElementsByClassName("tile-lang");
            const tileDescs = document.getElementsByClassName("tile-description");

            for (let i = 0; i < tiles.length; i += 1) {
                const titleHeight = tileTitles[i] ? tileTitles[i].offsetHeight : 0;
                const descHeight = tileDescs[i] ? tileDescs[i].offsetHeight : 0;
                const langHeight = tileLangs[i] ? tileLangs[i].offsetHeight : 0;
                const targetHeight = tiles[i].offsetWidth + titleHeight + descHeight + langHeight - 20;
                tiles[i].style.height = `${targetHeight}px`;
            }

            const wrappers = document.getElementsByClassName("img-wrapper");
            for (let i = 0; i < wrappers.length; i += 1) {
                wrappers[i].style.height = `${wrappers[i].offsetWidth}px`;
            }
        };

        window.addEventListener("resize", changeWrapperHW);
        window.setTimeout(changeWrapperHW, 0);

        return () => {
            window.removeEventListener("resize", changeWrapperHW);
        };
    }, [enabled]);
}
