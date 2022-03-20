import React from 'react'
import Typed from 'react-typed';

export default function Portada(){

const textLines = [
  'Welcome',
  ''

];
    return(
          <div  
            className="flex w-full h-full bg-no-repeat bg-cover bg-center bg-fixed justify-center items-center contenedorPortada "
            id="id_contenedor_portada"
          
          >
                <div className=" flex w-full content-center justify-center px-6 text-center text-white text-3xl md:text-7xl"> 
                    <Typed strings={textLines} typeSpeed={90} backSpeed={100}/>
                </div> 
          </div>
    )
}
