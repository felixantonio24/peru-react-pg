import React from "react"
import { useState, useEffect } from "react"

const Main = () => {
    const [text, setText] = useState('Welcome to Peru');
  
    useEffect(() => {
      const textLoad = () => {
        setTimeout(() => {
          setText('Welcome to Peru');
        }, 0);
        setTimeout(() => {
          setText('Country Gastronomic');
        }, 4000);
        setTimeout(() => {
          setText('Full of Culture');
        }, 8000);
        setTimeout(() => {
          setText('Full of Stories');
        }, 12000);
      };
  
      textLoad();
      const interval = setInterval(textLoad, 24000);
  
      return () => clearInterval(interval);
    }, []);

    return (
        <>
        <header>
            <div className="video-contain"> 
            <video autoPlay loop muted src="/video/video-header.mp4" constrols={false} playsInline></video>
            </div>
                <nav>   
                    <ul> 
                    <li> <a href="/Abaout">About</a></li>
                    <li> <a href="/Gallery">Gallery</a></li>
                    <li> <a href="/Contact">Contact</a></li>
                    </ul> 
                    </nav>
         </header>
         <h1 className="tittle">{text}</h1>

         <div className="Boton-Container"> 
        <button className="btn-places"> <img src="components/img/localizador-de-lugares.png" alt="places-icon" className="icon-ubicacion"/>TOP PLACE LIMA</button>
        
        <button className="btn-placefoot"> <img src="components/img/helado.png" alt="comida-lugares-icon" className="placer-food-icon"/> FOOD PLACES</button>

        <button className="btn-regions"> <img src="components/img/alfiler.png" alt="regions-icon" class="regions-icon"/>  REGIONS</button>
    </div>
        </>
    )
}


export default Main