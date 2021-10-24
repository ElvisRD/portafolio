
import { motion } from 'framer-motion';
import React from 'react'

function Nav() {


  return (
    <nav class=" w-full h-10  absolute flex-wrap bg-transparent p-4 ">
      <motion.div class=" w-full h-full block flex-grow lg:flex lg:items-center lg:w-auto "
                  style={{opacity: '0'}}
                  animate={{opacity: 1}}
                  transition={{type: 'tween',
                              duration: 4,
                              ease: 'anticipate'}}
      >
        <div class="flex w-full h-full text-xl lg:flex-grow flex-row justify-end mr-20">
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
            Docs
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
            Examples
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
            Examples
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
            Examples
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
            Blog
          </a>
        </div>
      </motion.div>
    </nav>
  );
}

export default Nav;
