import { useEffect } from "react";
import { useAppState } from "./useAppState";

import bannerPrincipal from "../assets/video/banner.mp4";

const useVideoPreloading = () => {
  const { setVideosPreloader,activeCarga,setActiveCarga } = useAppState();

  useEffect(() => {

   // Preload del video
   const videoElement = document.createElement('video');
   videoElement.src = bannerPrincipal;
   videoElement.onloadeddata = () => {
     // Actualizar el estado cuando el video está cargado
     if(activeCarga === false){
        setActiveCarga(true);
        setVideosPreloader({
            bannerPrincipal: bannerPrincipal, // Aquí guardamos la URL del video
        });
     }
   };
 }, []);

};

export default useVideoPreloading;
