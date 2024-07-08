import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Counter = () => {

    const [counterOn,setCounterOn]=useState(false)

  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div className='flex flex-col items-center md:py-14'>
            <div className='md:text-h1 xs:text-h2 mb-10'>Присоединяйтесь к нам!</div>
            <div className='grid xs:grid-cols-1 md:grid-cols-3 xs:gap-8 md:gap-28'>
                <div className='bg-[rgba(58,58,58,0.7)] rounded-full flex flex-col items-center justify-center px-10 py-20'>
                    <span className='text-h2 text-cyan-400'>
                        {counterOn && <CountUp  start={0} end={10} duration={3} delay={0}/>}
                    </span>
                    <span className='text-h4'>Лет на рынке</span>
                </div>
                <div className='bg-[rgba(58,58,58,0.7)] rounded-full flex flex-col items-center justify-center px-4 py-20'>
                    <span className='text-h2 text-cyan-400'>
                        {counterOn && <CountUp  start={0} end={1000} duration={3} delay={0}/>} +
                    </span>
                    <span className='text-h4'>Довольных клиентов</span>
                </div>
                <div className='bg-[rgba(58,58,58,0.7)] rounded-full flex flex-col items-center justify-center px-4 py-20'>
                    <span className='text-h2 text-cyan-400'>
                        {counterOn && <CountUp start={0} end={40} duration={3} delay={0}/>} %
                    </span>
                    <span className='text-h4'>Рост продаж</span>
                </div>
            </div>
        </div>
    </ScrollTrigger>


  )
}

export default Counter