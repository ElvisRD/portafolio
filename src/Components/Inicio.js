import React,{useEffect,useState} from 'react'
import Portada from './Portada'
import Icon from './icon'
import { motion } from "framer-motion"
import '../Css/inicio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons";

import Nav from './Nav'

function Inicio() {

  const [isVisible, setIsVisible] = useState(true);
  const [eventoTextoInicio, setEventoTextoInicio] = useState(false);
  const [mostrarDiv, setMostrarDiv] = useState(false);

    useEffect(() => {
     
      setTimeout(() => {
        transicionPortada();
      }, 2500);
       


    },[]);


    function transicionPortada(){

      
      setIsVisible(false);
     
      setTimeout(() => {
        document.getElementById('portada_container').style.display="none";
        document.getElementById('sexo').style.display="block";
        setEventoTextoInicio(true);

        setTimeout(() => {
          setMostrarDiv(true);
        }, 2500);

      }, 4000);


    }

    return (
     
      
      <div class=" w-full md:h-screen sm:h-screen">
      

          {eventoTextoInicio ? (<Nav />):("")}
         

          <div  
            class="flex w-full h-screen justify-center items-center bg-no-repeat bg-cover bg-center bg-fixed "
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1475257026007-0753d5429e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}}
          >

                  <motion.div className="w-full h-screen container_portada" id="portada_container"
                              animate={isVisible ? {} : {opacity: 0}}
                              transition={isVisible ? {} : {type: 'tween',
                                                            duration: 5,
                                                            ease: 'anticipate'}}
                          
                  >

                    <Portada />

                  </motion.div> 

                <div className="flex w-6/12 h-30 flex-col justify-center sexo" id="sexo">

                    <motion.div className="flex w-full h-30 div_container_textoInicio flex-col "
                                        id="div_container_textoInicio"
                                        animate={eventoTextoInicio ? {x:-300, opacity: 1}: {}}
                                        transition={eventoTextoInicio ? {duration: 2}: { }}
                    >
                      
                            
                            
                            <h1 class="sm:text-3xl md:text-5xl lg:text-6xl text-white text-center prese">-  Soy Elvis Rodríguez Durán  -</h1>  
                            <h4 class="sm:text-xl md:text-1xl lg:text-2xl text-white text-center mt-2 prese">Desarrollador Front-End</h4> 

                    </motion.div>

                    <motion.div className="flex w-full h-10 justify-center mt-4 aaa"
                                        
                    >
                      
                      <Icon href="https://www.instagram.com" icon={faInstagram}/>
                      <Icon href="#" icon={faGithub}/>
                      <Icon href="#" icon={faFacebook}/>
                      
                      
                     
                      <FontAwesomeIcon class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white cursor-pointer" icon={faLinkedin} />   
                            
                            

                    </motion.div>

                </div>
                
        
                
              

          </div>
 
          {mostrarDiv ? (
              <div className="w-full h-full bg-black">
                  <div class="h-4/5">
                      <div className="flex w-6/12 h-full bg-white justify-center items-center">
                        <motion.div className="w-8/12 h-5/6 bg-black">
                          <h1>hoal</h1>

                        </motion.div>
                        
                      </div>
                      <div>
                        <p></p> 
                      </div>
                  </div>
                  <div class="h-1/5">

                  </div>
              </div>
          ):("")}
         
        
       

      </div>
    );
  }

export default Inicio