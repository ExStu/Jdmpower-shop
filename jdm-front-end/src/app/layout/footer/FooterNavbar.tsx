'use client'

import { EnumPhones, KrasnodarPhoneUrl, MoscowPhoneUrl } from '@/constants/url.constants'
import Link from 'next/link'
import { FC } from 'react'
import { FiPhoneCall } from 'react-icons/fi'

const FooterNavbar: FC = () => {
  return (
    <div className='flex items-center text-sm'>
      {/* <Link href='/' className='mx-4 uppercase hover:text-primary transition-colors duration-200'>Home</Link> */}
      <Link href='/shop?page=1' className='mr-4 capitalize hover:text-primary transition-colors duration-200'>Главная</Link>
      <Link href='/news' className='mr-4 capitalize hover:text-primary transition-colors duration-200'>Новости</Link>
      <Link href='/about-us' className='mr-4 capitalize hover:text-primary transition-colors duration-200'>О нас</Link>
      <Link href='/contact-us' className='mr-4 capitalize hover:text-primary transition-colors duration-200'>Контакты</Link>
      <Link href='http://ssr.jdmpower.ru/' className='hover:text-primary transition-colors duration-200 capitalize mr-auto' target='_blank'>SSR Rims</Link>
        <div className='flex flex-col '>
          <div className='flex items-center'>
            <FiPhoneCall size={19} className='mr-2'/><span className='mr-2'>Москва:</span><a href={MoscowPhoneUrl}>{EnumPhones.MOSCOW}</a>
          </div>
          <div className='flex items-center'>
            <FiPhoneCall size={19} className='mr-2'/><span className='mr-2'>Краснодар:</span><a href={KrasnodarPhoneUrl}>{EnumPhones.KRASNODAR}</a>
          </div>
        </div>
    </div>
  )
}

export default FooterNavbar;
