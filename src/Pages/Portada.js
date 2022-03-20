import React from 'react'
import Typed from 'react-typed';

export default function Portada(){

const textLines = [
  'Hola',
  'Bienvenido a mi portafolio'

];
    return(
          <div  
            className="flex w-full h-full bg-no-repeat bg-cover bg-center bg-fixed justify-center items-center contenedorPortada"
            id="id_contenedor_portada"
          
          >
                <div className=" flex content-center justify-center h-32  text-center text-white text-3xl md:text-7xl"> 
                    <Typed strings={textLines} typeSpeed={48} backSpeed={10}/>
                </div> 
          </div>
    )
}
