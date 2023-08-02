'use client'

import Container from '@/ui/Container'
import { FC } from 'react'
import FooterNavbar from './FooterNavbar'
import Socials from '@/ui/socials/Socials'

const Footer: FC = () => {
  return (
    <div className='bg-shark text-white'>
      {/* top */}
      <div className='py-5'>
        <Container>
          <FooterNavbar/>
        </Container>
      </div>
      {/* bottom */}
      <div className='border-t border-black py-5'>
        <Container>
          <div className='flex'>
            <span className='block mr-auto text-xs'>&copy;&nbsp;2023 JdmPower-Shop. All rights reserved</span>
            <Socials/>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Footer;
