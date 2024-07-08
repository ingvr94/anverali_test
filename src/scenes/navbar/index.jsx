import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'
import { useState } from 'react'
import AnimatedHamburgerButton from '../../elements/burger/AnimatedHamburgerButton';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
const isAboveMediumScreen=useMediaQuery("(min-width: 1060px)")
const [isMenuToggled,setIsMenuToggled]=useState(false)
  
return (
    <>
    {isAboveMediumScreen ? 
        <nav className='flex justify-between items-center mt-6 mb-8'>
            <div className='text-h1 flex font-semibold cursor-pointer transition-colors hover:text-gray-400'>
                анверали <span className=' text-cyan-300'>.</span>
            </div>
            <div className='text-h4'>
                <button className='py-2 px-4 mr-4 transition-colors hover:text-gray-400'>Вход</button>
                <button className='py-2 px-4 bg-cyan-400 rounded-xl transition-opacity delay-100 ease-in hover:opacity-90'>Регистрация</button>
            </div>
        </nav>
        :
        <nav className='mt-6 mb-8'>
            <div className='flex justify-between items-center mx-2'>
                <div className='text-h1 flex font-semibold cursor-pointer transition-colors hover:text-gray-400'>
                    анверали <span className=' text-cyan-300'>.</span>
                </div>
            <AnimatedHamburgerButton 
            isMenuToggled={isMenuToggled}
            setIsMenuToggled={setIsMenuToggled}/>
            {/* {isMenuToggled 
            ? <button
            onClick={()=>setIsMenuToggled(false)}>
                <FaXmark className="h-8 w-8"/>
            </button>
            :
            <button
            onClick={()=>setIsMenuToggled(true)}>
                <FaBars className='h-8 w-8 '/>
            </button>
            } */}
            </div>
            {isMenuToggled && 
             <div className='flex justify-end'>
                <ul className='flex flex-col items-end text-2xl bg-[rgba(58,58,58,0.7)] w-fit p-3 rounded-2xl'>
                    <li>
                        Вход
                    </li>
                    <li > 
                        Личный кабинет
                    </li>
                </ul>
             </div>

               
            }
        </nav>
    }

    </>

  )
}

export default Navbar