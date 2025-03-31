"use client"
import React, { useState } from 'react';
import { GiHelp } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex justify-between items-center pl-4 pr-6 py-3 bg-[#232F3F] shadow-md'>
    
      <div className='flex gap-4 items-center'>
        <img src='wz-logo.png' alt='logo' className='h-8' />
        <span className='font-bold text-white uppercase hidden md:block'>EXCHANGE</span>
      </div>

      <div className='hidden md:flex gap-6 items-center'>
        <button className='text-white cursor-pointer flex uppercase gap-2 items-center text-sm'>
          <GiHelp className='text-lg'/> help
        </button>
        <div className='h-8 w-[1px] bg-gray-500'></div>
        <button className='text-white cursor-pointer uppercase text-sm'>Log In</button>
        <button className='bg-[#ECC94B] h-9 px-5 text-[#4F3502] font-bold text-sm cursor-pointer hover:bg-[#f8d35a] transition-colors'>
          SIGN IN
        </button>
      </div>

    
      <button 
        onClick={toggleMenu}
        className='md:hidden text-white focus:outline-none'
      >
        
          <div className=' bg-blue-500 rounded-md p-3 '>

            <BiMenu size={25}/>
          </div>
       
      </button>

    
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='absolute top-16 left-0 right-0 bg-[#232F3F] shadow-lg md:hidden z-50'
          >
            <div className='flex flex-col items-center px-4 py-3 border-t border-gray-700'>
          
               <div className=' border-b border-gray-500/80 w-full'>

                <p className='font-bold text-center text-white my-4 uppercase '>EXCHANGE</p>
               </div>
               <div className=' border-b flex justify-center border-gray-500/80 w-full'>

               <button className='text-white   my-4 cursor-pointer flex uppercase gap-2 items-center text-sm'>
          <GiHelp className='text-lg '/> help
        </button>
               </div>
               <div className=' border-b flex justify-center border-gray-500/80 w-full'>

               <a href='#' className='text-white px-2 py-3 border-b border-gray-700 hover:bg-gray-700/50'>Log In</a>
               </div>
               <div className=' border-b flex justify-center border-gray-500/80 w-full'>

               <a href='#' className='text-[#4F3502] w-full bg-[#ECC94B] px-2 py-3 font-bold text-center mt-2 hover:bg-[#f8d35a]'>
                SIGN IN
              </a>
               </div>
             
                
             
             
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;