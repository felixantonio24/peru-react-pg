import React from "react";
import './About.css'

const About = (props) =>{



    return(
    <>
    <article>
     <div className="container_About"><br />
   <span className='Title_Span'>New news</span>

        <div className="Title-About">
            <h2 className="Title-Peruvian"> Peruvian coffees receive thirteen awards in the International Competition</h2>

            <div className="img-coffe" >
               <a href="https://www.gob.pe/institucion/mincetur/noticias/684867-cafes-peruanos-obtienen-trece-premios-en-concurso-internacional" target="_blank" rel="noopener noreferrer"> 
               <img src="/cafe-img.jpg" alt="coffe"  className="img-cofee" />
               </a>
               

            </div>



        </div>

     </div> 
     </article>
    </>
    )
}

export default About