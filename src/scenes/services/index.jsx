import React from 'react'
import Card from '../card'
import mainSubs from "../../data/main.json"

const Services = () => {
  return (
    <div className='w-full flex flex-col items-center rounded-md bg-[rgba(58,58,58,0.7)] py-14 px-5'>
        <div className='text-h2 text-center font-bold mb-10'>Выберите свой план</div>
        <ul className='grid xs:grid-cols-1 md:grid-cols-4 gap-4'>
            {mainSubs.map(e=>(
            <li>
                <Card 
                name={e.name}
                advantages={e.advantages}
                price={e.price}/>
            </li>
        
                ))}
        </ul>

    </div>
  )
}

export default Services