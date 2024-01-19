import React from "react"
import { useState, useEffect } from "react"
import About from "./About";

const Main = () => {
    const [text, setText] = useState('Welcome to Peru');
   
const click = () =>{

  useEffect(() =>{
  
  })

}





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
                    <li> <a href="/Abaout" onClick={click} >About</a></li>
                    <li> <a href="/Gallery">Gallery</a></li>
                    <li> <a href="/Contact">Contact</a></li>
                    </ul> 
                    </nav>
         </header>
         <h1 className="tittle">{text}</h1>

         <div className="Boton-Container"> 
        <button className="btn-places"> <img src="/localizador-de-lugares.png" alt="places-icon" className="icon-ubicacion"/>TOP PLACE LIMA</button>
        
        <button className="btn-placefoot"> <img src="/helado.png" alt="comida-lugares-icon" className="placer-food-icon"/> FOOD PLACES</button>

        <button className="btn-regions"> <img src="/alfiler.png" alt="regions-icon" className="regions-icon"/>  REGIONS</button>
    </div>
        <div>
        <img src="/scrapbook-2472422_1280.jpg" alt="body" className="cuerpo"/>
        </div>
        

        </>
    )
}


export default Main