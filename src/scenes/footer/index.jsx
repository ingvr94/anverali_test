import React from 'react'
import { PiTelegramLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

const Footer = () => {
  return (
    <div className='border-t-2 border-[rgba(58,58,58,0.7)] flex flex-col  py-14'>
        <div className='text-h1 flex justify-center font-semibold cursor-pointer transition-colors hover:text-gray-400 mb-10'>
            анверали <span className=' text-cyan-300'>.</span>
        </div>
        <div className='md:flex md:justify-around xs:grid xs:grid-cols-2 xs:gap-10'>
            <ul>
                <li className='font-bold text-h4 mb-3'>Основные ссылки</li>
                <li className='mb-2'>
                    <a href="#">Вход</a>
                </li>
                <li>
                    <a href="#">Регистрация</a>
                </li>
            </ul>
            <ul>
                <li className='font-bold text-h4 mb-3'>Информация</li>
                <li className='mb-2 '>
                    <a href="#">Соглашение</a>
                </li>
                <li className='mb-2 '>
                    <a href="#">Конфиденциальность</a>
                </li>
                <li className='mb-2 '>
                    <a href="#">Реквизиты</a>
                </li>
                <li className='mb-2 '>
                    <a href="#">Вакансии</a>
                </li>
            </ul>
            <ul>
                <li className='font-bold text-h4 mb-3'>Есть вопросы?</li>
                <li>
                    <button className='py-2 px-4 bg-cyan-400 rounded-xl duration-300 hover:transition-opacity hover:opacity-80 mb-3'>Связаться</button>
                </li>
                <li className='flex md:justify-between xs:gap-4'>
                    <FaWhatsapp className='w-8 h-8 cursor-pointer'/>
                    <PiTelegramLogo className='w-8 h-8 cursor-pointer'/>
                    <SlSocialVkontakte className='w-8 h-8 cursor-pointer'/>
                </li>
            </ul>
        </div>
        <div className='flex justify-center mt-5'>Anverali© 2024. Все права защищены</div>
    </div>
  )
}

export default Footer