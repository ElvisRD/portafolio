import React,{useEffect,useState} from 'react'
import Portada from './Portada'
import Icon from '../Components/icon'
import IconTec from '../Components/IconsTecn'
import cara from '../img/cara.png'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import Aos from "aos"
import 'aos/dist/aos.css'
import NassApp from "../img/Nassapp.jpg"
import portafolio from "../img/portafolio.jpg"
import calcular from "../img/calcular.jpg"
import cv from '../archive/curriculum.pdf'


import Nav from '../Components/Nav'
import CardProyecto from '../Components/cardProyecto'


function Inicio() {

  const [isVisible, setIsVisible] = useState(true);
  const [visibleTituloInicio, setvisibleTituloInicio] = useState(false);
  const [visibleSubTitulo, setVisibleSubtitulo] = useState(false);
  const [visibleIcons, setVisibleIcons] = useState(false);
  const [mostrarDiv, setMostrarDiv] = useState(false);
 
    useEffect(() => {
     
      setTimeout(() => {
        transicionPortada();
      }, 4400);
       
      Aos.init({duration: 1500});

    },[]);


    function transicionPortada(){

        setIsVisible(false);  

          document.getElementById('portada_container').style.display="none";
          document.getElementById('sexo').style.display="block";
          
          setvisibleTituloInicio(true);   //MOSTRAR TITULO INICIO
          
          setTimeout(() => {
            setVisibleSubtitulo(true)       //MOSTRAR SUBTITULO
          }, 1000);
  
          setTimeout(() => {
            setVisibleIcons(true)       //MOSTRAR ICONOS INICIO
          }, 1800);
  
          setTimeout(() => {
            setMostrarDiv(true);
          }, 3500);
  
    }

    return (
     
      <div class=" w-full sm:h-screen md:h-screen sm:h-screen">
      

         {visibleIcons ? (<Nav />):("")}
         

          <seccion  
            class="flex w-full h-screen justify-center items-center bg-no-repeat bg-cover bg-center bg-fixed " id="home"
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1475257026007-0753d5429e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}}
          >

                  <motion.div className="w-full h-screen" id="portada_container"
                              initial={{backgroundColor: 'black'}}
                              animate={isVisible ? {} : {opacity: 0}}
                              transition={isVisible ? {} : {type: 'tween',
                                                            duration: 4,
                                                            }}
                          
                  >

                    <Portada />

                  </motion.div> 

                 <div className="flex w-screen sm:h-26 md:h-30 lg:h-34 flex-col justify-center hidden " id="sexo" >

                    <div className="flex w-full sm:h-24 md:h-28 lg:h-32 flex-col " id="div_container_textoInicio">

                            <motion.h1 class=" w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center font-Title"
                            initial={{ opacity: '0', marginLeft: '-300px'}}
                            animate={visibleTituloInicio ? {x: 300, opacity: 1}: {}}
                            transition={visibleTituloInicio ? {duration: .5}: { }}
                  
                            > Elvis Rodríguez Durán </motion.h1>  

                            <motion.h2 class=" w-full text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white mt-2 text-center font-Title"
                            initial={{ opacity: '0', marginLeft: '-300px'}}
                            animate={visibleSubTitulo ? {x: 300, opacity: 1}: {}}
                            transition={visibleSubTitulo ? {duration: 1}: { }}
                  
                            > Desarrollador Frontend </motion.h2>  
                          
                    </div>

                     <motion.div className="flex w-full h-10 mt-0 justify-center "
                                initial={{opacity: '0', marginLeft: '-300px'}}
                                animate={visibleIcons ? {x:300, opacity: 1}: {}}
                                transition={visibleIcons ? {duration: 1}: { }}                 
                    >
                      
                      <Icon href="https://www.instagram.com/_elvisrd_/" icon={faInstagram} classA="w-6 sd:w-10 md:w-10 lg:w-10 mr-8 " />
                      <Icon href="https://github.com/ElvisRD" icon={faGithub} classA="w-6 sd:w-10 md:w-10 lg:w-10 mr-8 "/>
                      <Icon href="https://www.facebook.com/2soul2" icon={faFacebook} classA="w-6 sd:w-10 md:w-10 lg:w-10 mr-8 "/>
                      <a className="w-6 sd:w-10 md:w-10 lg:w-10"  href="https://www.linkedin.com/in/elvis-rodr%C3%ADguez-dur%C3%A1n-58b338224/" target="_blank" rel="noreferrer" ><FontAwesomeIcon class="block w-full h-full lg:inline-block text-white hover:text-white cursor-pointer" icon={faLinkedin} /></a> 
                            
                          
                    </motion.div> 

                </div> 
              
          </seccion>
 
       {mostrarDiv ? (
         <>
              <section className="flex w-full bg-black  py-12 md:py-48" id="sobreMi">
                  <div class="flex w-full flex-col pb-6 md:pd-0 lg:flex-row ">
                    <div className="flex w-full py-12 mt-0 justify-center items-center">
                              <div data-aos="fade-right" className='flex flex-col w-full'>
                                <div className="flex w-full items-center">
                                      <h2 className="w-full text-4xl text-white text-center font-Title">Sobre mí</h2> 
                                  </div>
                            
                                  <div className="flex w-full mt-6 md:h-full text-xl justify-center">
                                      <p className="w-full text-xl md:text-2xl text-center px-16 text-white font-Text">
                                          Soy Elvis Rodríguez Durán, tengo 23 años y estoy estudiando ingeniería en informática en la universidad del Bío-Bío. Actualmente, estoy cursando mi último año de carrera y me estoy enfocando en el desarrollo Frontend.
                                      </p> 
                                  </div>
                                  <div className='flex w-full mt-8 justify-center'>
                                    <a href={cv} download className="bg-blue-500 hover:bg-blue-700 py-3 text-white font-bold py-2 px-4 rounded z-10">
                                        Descargar CV
                                    </a>

                                  </div>
                              </div>       
                    </div>
                      
                    <div className="flex w-full lg:mt-0 md:w-full lg:items-center justify-center ">
                      <div data-aos="fade-left" className='flex h-full md:mt-2 lg:mt-0 lg:items-center justify-center '>
                        <img src={cara} alt="jujutsu" className='w-6/12'/>
                      </div>
                       
                    </div> 

                  </div>
                  
              </section>

              <section className="flex flex-row " id="miConocimiento">

                <div data-aos="fade-right" className="lg:w-4/12 hidden lg:flex py-6 mt-12 justify-center items-center"> 
                  <img className="md:w-10/12 h-full rounded-3xl" alt="programer" src={"https://images.unsplash.com/photo-1599837487527-e009248aa71b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>
                </div> 

                <div className="w-full lg:w-8/12 h-full">
        
                    <div data-aos="fade-down" className="flex w-full h-24 mt-16 md:h-40 items-center" >
                        <h1 className="w-full text-4xl lg:text-6xl text-black text-center font-Title">Tecnologías</h1>
                    </div>

                    <div className="flex md:h-5/6 w-full lg:mt-6 lg:mb-48 justify-center"> 
                                    <div className="flex flex-col md:flex-row w-full items-center md:items-stretch justify-center">
                                        <div data-aos="fade-up" className=" w-72 sm:w-6/12 mr-0 md:w-72 shadow-2xl rounded-md">
                                          <div className="flex w-full h-1/6 mb-3 mt-3 md:mb-0 p-8 md:mt-0 justify-center items-center">
                                              <h1 className="text-2xl font-Title">Fontend</h1>
                                          </div>
                                          <hr/>
                                          <div className="flex flex-col items-center w-full pb-8 mb-6 md:pb-0">

                                              <IconTec class="devicon-html5-plain colored" pClass="flex md:ml-5 items-center" text="HTML5"/>

                                              <IconTec class="devicon-css3-plain colored" pClass="flex mr-5 md:mr-3 items-center" text="CSS"/>

                                              <IconTec class="devicon-javascript-plain colored" pClass="flex ml-3 items-center" text="JavaScript"/>

                                              <IconTec class="devicon-bootstrap-plain colored" pClass="flex ml-3 items-center" text="Bootstrap"/>

                                              <IconTec class="devicon-materialui-plain colored" pClass="flex ml-3 items-center" text="MaterialUi"/>
                                              
                                              <IconTec class="devicon-react-original colored" pClass="flex mr-3 items-center" text="React"/>
      
                                          </div>
                                        </div>
                                        <div data-aos="fade-down" className=" w-72 sm:w-6/12 mt-10 md:mt-0 ml-3 md:w-72 shadow-2xl rounded-md mr-0 md:mr-3">
                                          <div className="flex w-full h-1/6 mb-3 mt-3 md:mb-0 md:mt-0 p-8 justify-center items-center">
                                              <h1 className="text-2xl font-Title">Herramientas</h1>
                                          </div>
                                          <hr/>
                                          <div className="flex flex-col items-center w-full pb-8 md:pb-0">

                                              <IconTec class="devicon-git-plain colored" pClass="flex mr-5 items-center" text="Git"/>

                                              <IconTec class="devicon-vscode-plain colored" pClass="flex ml-3 items-center" text="VSCode"/>

                                              <IconTec class="devicon-linux-plain colored" pClass="flex mr-2 items-center" text="Linux"/>
                                          
                                              <IconTec class="devicon-github-original colored" pClass="flex ml-3 items-center" text="Github"/>
                                    
                                          </div>
                                        </div>
                                        <div data-aos="fade-up" className=" w-72 sm:w-6/12 mt-10 md:mt-0 md:w-72 shadow-2xl rounded-md ">
                                          <div className="flex w-full h-1/6 mb-3 mt-3 md:mb-0 md:mt-0 p-8 justify-center items-center">
                                              <h1 className="text-2xl font-Title">Base de datos</h1>
                                          </div>
                                          <hr/>
                                          <div className="flex flex-col items-center w-full pb-8 md:pb-0">
                                            
                                              <IconTec class="devicon-postgresql-plain colored" pClass="flex ml-4 md:ml-1 items-center" text="PostgreSQL"/>

                                              <IconTec class="devicon-mysql-plain colored" pClass="flex mr-4 items-center" text="MySQL"/>

                                              <IconTec class="devicon-mongodb-plain colored" pClass="flex ml-3 items-center" text="MongoDb"/>
                                              
                                          </div>
                                        </div>
                        </div>
                    </div>
                </div>         
              </section>

              <section className="w-full py-32" id="proyectos"> 
                  <div className='flex w-full h-full flex-col'>
                      <div data-aos="fade-left" className="flex w-full h-40 mt-4 items-center" >
                          <h1 className="w-full text-4xl lg:text-6xl text-black text-center font-Title">Proyectos</h1>
                      </div>
                     
                      <div className='grid w-full gap-4 grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-3 '>
                          
                          <div data-aos="fade-right"className='flex w-full h-54 justify-center'>
                            <CardProyecto 
                              nombre="Portafolio"
                              imagen={portafolio}
                              linkGit="https://github.com/ElvisRD/portafolio"
                              linkWeb="https://elvisrd-portafolio.mdbgo.io/"
                              descripcion="Es el portafolio en el que estás, aquí encontraras información sobre mi conocimiento y mis proyectos."
                              classDiv = "flex w-11/12 md:w-11/12 h-58 flex-col shadow-2xl rounded-md"
                            />
                          </div>

                          <div data-aos="fade-up" className='flex w-ful h-54 justify-center'>
                            <CardProyecto 
                              nombre="NassApp"
                              imagen={NassApp}
                              linkGit="https://github.com/ElvisRD/react_NassApp"
                              linkWeb="https://elvisrd-nassapp.mdbgo.io/"
                              descripcion="Es una aplicacion que muestra información interesante obtenida por distintas APIs de la NASA." 
                              classDiv = "flex w-11/12 h-36 flex-col shadow-2xl rounded-md"
                            />
                          </div>

                          <div data-aos="fade-left" className='flex w-full h-54 justify-center'>
                            <CardProyecto 
                              nombre="Calculador de promedios"
                              linkGit="https://github.com/ElvisRD/react-calculadorPromedio"
                              linkWeb="https://react-calculador-promedio.vercel.app/"
                              imagen={calcular}
                              descripcion="Aplicación que permite calcular promedios según el porcentaje de las notas."
                              classDiv = "flex w-11/12 h-36 flex-col shadow-2xl rounded-md"
                            />
                          </div>

                        </div>
                            
                      </div>
              
              
              </section>
              </>
          ):("")} 
         
      </div>
    );
  }

export default Inicio