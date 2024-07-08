import React from 'react'
import extraItems from '../../data/extra.json'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const MultipleItems = () => {

  return (
    <Splide>
        {extraItems.map(e=>(
            <SplideSlide className='flex justify-center items-center mb-10'>
                <div className='bg-[rgba(58,58,58,0.7)] flex flex-col items-center xs:w-full md:w-auto md:px-32 py-10 rounded-lg'>
                    <div className='md:text-h3 xs:text-h4'>{e.name}</div>
                    <div className='my-3'>Цена: {e.price}</div>
                    <button className='py-2 px-4 bg-cyan-400 rounded-xl duration-300 hover:transition-all hover:rotate-1'>Добавить</button>
                </div>
            </SplideSlide>
        ))}

    </Splide>
  )
}

export default MultipleItems