'use client'

import { KrasnodarPhoneUrl, MoscowPhoneUrl } from '@/constants/url.constants'
import Link from 'next/link'
import { FC } from 'react'
import { FiPhoneCall } from 'react-icons/fi'

const FooterNavbar: FC = () => {
  return (
    <div className='flex items-center text-sm'>
      {/* <Link href='/' className='mx-4 uppercase hover:text-primary transition-colors duration-200'>Home</Link> */}
      <Link href='/shop?page=1' className='mr-4 uppercase hover:text-primary transition-colors duration-200'>Shop</Link>
      <Link href='/news' className='mr-4 uppercase hover:text-primary transition-colors duration-200'>News</Link>
      <Link href='/about-us' className='mr-4 uppercase hover:text-primary transition-colors duration-200'>About us</Link>
      <Link href='/contact-us' className='mr-4 uppercase hover:text-primary transition-colors duration-200'>Contact us</Link>
      <Link href='http://ssr.jdmpower.ru/' className='hover:text-primary transition-colors duration-200 uppercase mr-auto' target='_blank'>SSR Rims</Link>
        <div className='flex flex-col '>
          <div className='flex items-center'>
            <FiPhoneCall size={19} className='mr-2'/><span className='mr-2'>Moscow:</span><a href={MoscowPhoneUrl}>+7 (919) 102-52-17</a>
          </div>
          <div className='flex items-center'>
            <FiPhoneCall size={19} className='mr-2'/><span className='mr-2'>Krasnodar:</span><a href={KrasnodarPhoneUrl}>+7 (928) 880-72-52</a>
          </div>
        </div>
    </div>
  )
}

export default FooterNavbar;
