import React from 'react'
import { motion } from 'framer-motion'

const AnimatedHamburgerButton = ({isMenuToggled,setIsMenuToggled}) => {
    
  return (
    <motion.button
    onClick={()=>setIsMenuToggled(!isMenuToggled)}
     className='relative w-10 h-10 mt-1'
     animate={isMenuToggled ? 'open' : 'closed'}
     initial={false}>
        <motion.span
        style={{
            left:'50%',
            top:'30%',
            x:'-50%',
            y:'-50%',
        }}
        className='absolute h-1 w-6 bg-white'
        variants={{
            open: {
                rotate:['0deg','0deg','45deg'],
                top:['30%','50%','50%']
            },
            closed:{
                rotate:['45deg','0deg','0deg'],
                top:['50%','50%','30%']
            }
        }}/>
        <motion.span 
        style={{
            left:'50%',
            top:'50%',
            x:'-50%',
            y:'-50%'
        }}
        className='absolute h-1 w-6 bg-white'
        variants={{
            open: {
                rotate:['0deg','0deg','-45deg']
            },
            closed:{
                rotate:['-45deg','0deg','0deg'],
            }
        }}/>
        <motion.span
        style={{
            left:'50%',
            bottom:'30%',
            x:'-50%',
            y:'50%'
        }}
        className='absolute h-1 w-6 bg-white'
        variants={{
            open: {
                rotate:['0deg','0deg','45deg'],
                bottom:['30%','50%','50%'],
                
            },
            closed:{
                rotate:['45deg','0deg','0deg'],
                bottom:['50%','50%','30%'],
                left:'50%'
            }
        }}
        />
    </motion.button>
  )
}

export default AnimatedHamburgerButton