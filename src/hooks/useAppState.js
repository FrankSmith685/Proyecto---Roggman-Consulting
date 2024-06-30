import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useAppState = () => {
    const {
        appState,
        setImagenesPreloader,
        setVideosPreloader,
        setActiveCarga
    } = useContext(AppContext);

    const {
        imagenesPreloader,
        videosPreloader,
        activeCarga
    } = appState;

    return {
        setImagenesPreloader,
        imagenesPreloader,
        setVideosPreloader,
        videosPreloader,
        setActiveCarga,
        activeCarga
    };
};
