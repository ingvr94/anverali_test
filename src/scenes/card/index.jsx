import React from 'react'
import { LuCheckCircle2 } from "react-icons/lu";

const Card = ({name,advantages,price}) => {
  return (
    <div className='rounded-xl bg-black flex flex-col justify-between min-h-[550px]'>
        <div>
            <div className='text-h3  flex justify-center bg-gradient-to-r from-black to-cyan-300 uppercase py-4 rounded-xl'>
                {name}
            </div>
            <div className='text-h3 flex flex-col items-center my-3'>{price}
                <span className='text-h5'>в месяц</span>
            </div>
            {advantages.map(e=>(
                <ul className='px-4 text-h5'>
                    <li className='flex justify-between pb-3'>
                        <span >{e}</span>
                        <LuCheckCircle2 className='min-w-5 min-h-5'/>
                    </li>
                </ul>
            ))}
        </div>
        <div className='flex justify-center mb-2'>
            <button className='py-2 px-4 bg-cyan-400 rounded-xl duration-300 hover:transition-all hover:rotate-1'>Подписаться</button>
        </div>

    </div>
  )
}

export default Card