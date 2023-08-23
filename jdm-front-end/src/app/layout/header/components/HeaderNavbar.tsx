'use client'

import { EnumPhones, KrasnodarPhoneUrl, MoscowPhoneUrl } from '@/constants/url.constants'
import Link from 'next/link'
import { FC } from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import CategoriesDrop from './CategoriesDrop'

const HeaderNavbar: FC = () => {
  return (
    <div className='flex items-center text-sm py-4'>
      {/* <div className='flex items-center mr-4 px-4 h-[60px] rounded-t-sm uppercase bg-primary'>
        <IoIosMenu size={25} className='mr-3'/> <span className='mr-12'>All categories</span>
      </div> */}
      {/* <CategoriesDrop/> */}
      <Link href='/' className='mr-4 capitalize hover:text-primary transition-colors duration-200'>Главная</Link>
      <Link href='/shop?page=1' className='mr-4 capitalize hover:text-primary transition-colors duration-200'>Магазин</Link>
      <Link href='/news' className='mr-4 capitalize hover:text-primary transition-colors duration-200'>Новости</Link>
      <Link href='/about-us' className='mr-4 capitalize hover:text-primary transition-colors duration-200'>О Нас</Link>
      <Link href='/contact-us' className='mr-4 capitalize hover:text-primary transition-colors duration-200'>Контакты</Link>
      <Link href='http://ssr.jdmpower.ru/' className='hover:text-primary transition-colors duration-200 capitalize mr-auto' target='_blank'>SSR Rims</Link>
        <div className='flex '>
          <div className='flex items-center mr-5'>
            <FiPhoneCall size={19} className='mr-2'/><span className='mr-2 text-xs'>Москва:</span><a className='text-sm hover:text-primary transition-colors duration-200' href={MoscowPhoneUrl}>{EnumPhones.MOSCOW}</a>
          </div>
          <div className='flex items-center'>
            <FiPhoneCall size={19} className='mr-2'/><span className='mr-2 text-xs'>Краснодар:</span><a className='text-sm hover:text-primary transition-colors duration-200' href={KrasnodarPhoneUrl}>{EnumPhones.KRASNODAR}</a>
          </div>
        </div>
    </div>
  )
}

export default HeaderNavbar;
