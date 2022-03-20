
import { motion } from 'framer-motion';
import React,{useState} from 'react'


import Link from './navLink'

function Nav() {
 
  const [openMenu, setOpenMenu] = useState(false);

    //*ABRIR NAV MOVIL
    const handleOpenMenu = () => {
      
        if(openMenu === false){
            setOpenMenu(true);

        }else{
            setOpenMenu(false);
        }
    }



  return (
      <motion.div class="w-full fixed bg-black z-10"
                  style={{opacity: '0'}}
                  animate={{opacity: 1}}
                  transition={{type: 'tween',
                              duration: 4,
                              ease: 'anticipate'}}
      >
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-center md:flex-row md:px-6 lg:px-8">
                <div className="p-4 md:py-8 flex flex-row items-center justify-end">
                    <button className="md:hidden rounded-full p-1 hover:bg-gray-800 focus:outline-none focus:shadow-outline" onClick={handleOpenMenu}>
                        <svg viewBox="0 0 20 20" className="w-6 h-6">
                        {
                            openMenu === true ? (
                                <path fill="white" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path>
                            ):(<path  fill="white" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" ></path>)
                        }
                        </svg> 
                    </button>
                </div>

                    <nav id='nav' className={openMenu === false ? ("flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-center md:flex-row"):("flex-col flex-grow pb-4 md:pb-0 flex md:justify-center md:flex-row")}>
                    
                        <Link className="px-4 py-2 text-white mt-2 text-md font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 focus:text-gray-900 hover:bg-gray-800 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#home" nombre="Inicio"/>
                        <Link className="px-4 py-2 text-white mt-2 text-md font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 focus:text-gray-900 hover:bg-gray-800 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#sobreMi" nombre="QuienSoy"/>
                        <Link className="px-4 py-2 text-white mt-2 text-md font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 focus:text-gray-900 hover:bg-gray-800 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#miConocimiento" nombre="Conocimiento"/>
                        <Link className="px-4 py-2 text-white mt-2 text-md font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 focus:text-gray-900 hover:bg-gray-800 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#proyectos" nombre="Proyectos"/>

                    </nav>
        </div>
      </motion.div>
  
  );
}

export default Nav;
