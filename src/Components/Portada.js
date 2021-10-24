import React,{useEffect,useState} from 'react'
import '../Css/portada.css'
import { motion } from "framer-motion"


function Portada(){

    

    return(
        
          <div  
            className="flex w-full h-full bg-no-repeat bg-cover bg-center bg-fixed justify-center items-center contenedorPortada"
            id="id_contenedor_portada"
          
            >

            
                <motion.div className=" flex content-center justify-center  div_container_texto_presentacion  h-50 text-center  " 
                            animate={{ scale: 2.5, opacity: 1 , y: -300}}
                            transition={{ 
                              type: 'tween',
                              duration: 1.8,
                              ease: 'anticipate'
                        
                              
                            
                            }}
        
                >
                        <h1 class="sm:text-3xl md:text-4xl lg:text-5xl text-white prese">Bienvenido subnormal</h1> 

                </motion.div>
                
    
            </div>
 

    )
}
export default Portada