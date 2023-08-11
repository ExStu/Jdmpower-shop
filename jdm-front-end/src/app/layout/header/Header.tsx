'use client'

import Container from '@/ui/Container'
import SquareButton from '@/ui/button/SquareButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import HeaderCart from './cart/HeaderCart'
import HeaderNavbar from './components/HeaderNavbar'
import SearchField from './components/Search'
import Socials from '@/ui/socials/Socials'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import Link from 'next/link'
import { Select } from 'antd'
import styles from './Header.module.scss'



const Header: FC = () => {

  const {user} = useAuth()
  const {logout} = useActions()

  console.log(user);

  const router = useRouter()

  return (

    <header className='flex flex-col bg-secondary text-white'>
      <div className='border-b border-black py-4'>
        {/* top */}
        <Container>
          <div className='flex items-center'>

            {/* <div className='mr-5 text-xs uppercase'>
              English
            </div> */}
            <Select
              defaultValue='English'
              bordered={false}
              className={styles.customSelect}
              options={[
                {value: 'Russian', label: 'Russian'},
                {value: 'English', label: 'English'}
              ]}
            />
            <Select
              defaultValue='USD'
              bordered={false}
              className={styles.customSelect}
              options={[
                {value: 'RUB', label: 'RUB'},
                {value: 'USD', label: 'USD'},
                {value: 'EUR', label: 'EUR'}
              ]}
            />
            {/* <div className='text-xs uppercase'>
              Rub
            </div> */}
            <div className='ml-auto flex items-center'>
              {/* <ul className='flex mr-5'>
                <li className='mr-3 '>Register</li>
                <li className='text-xs uppercase'>Login</li>
              </ul> */}
              <div className='mr-3 text-xs'>{user ? <button className='uppercase hover:text-primary transition-colors duration-200' onClick={() => logout()}>Logout</button> : <button onClick={() => router.push('/auth')} className='uppercase hover:text-primary transition-colors duration-200'>Login</button>}</div>
              <Socials/>
            </div>
          </div>
        </Container>
      </div>
      <div className='border-b border-black py-5'>
        {/* middle */}
        <Container>
          <div className='flex items-center'>

            <Image 
              src='/images/JdmPower-logo-v2.png'
              alt='JdmPower logo'
              width={250}
              height={50}
              className='mr-auto'
            />
            <SearchField/>
            {/* <Link
              href='/favorites'
              className='text-white mr-5'
            >
              <AiOutlineHeart size={28}/>
            </Link> */}
            <SquareButton
              Icon={AiOutlineHeart}
              onClick={() => router.push('/favorites')}
              className='mr-5'
            />
            <HeaderCart/>
          </div>
        </Container>
      </div>
      <div className='border-b-2 border-primary'>
        {/* bottom */}
        <Container>
          <HeaderNavbar/>
        </Container>
      </div>
    </header>
    
  )
}

export default Header;
