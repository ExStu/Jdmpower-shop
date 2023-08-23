'use client'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useProfile } from '@/hooks/useProfile'
import { UserService } from '@/services/user.service'
import Container from '@/ui/Container'
import SquareButton from '@/ui/button/SquareButton'
import Socials from '@/ui/socials/Socials'
import { useQuery } from '@tanstack/react-query'
import { Select } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import styles from './Header.module.scss'
import HeaderCart from './cart/HeaderCart'
import HeaderNavbar from './components/HeaderNavbar'
import SearchField from './components/Search'
import Link from 'next/link'



const Header: FC = () => {

  const {user} = useAuth()
  const {profile} = useProfile()
  const {logout} = useActions()

  const { data } = useQuery(['get profile'], () => UserService.getProfile())

  // console.log(profile?.favorites);
  
  const userData = data?.data
  // console.log(userData?.favorites);

  const router = useRouter()

  const onLogout = () => {
    logout()
    router.refresh()
  }

  return (

    <header className='flex flex-col bg-white'>
      <div className='border-b border-black bg-secondary py-4  text-white'>
        {/* top */}
        <Container>
          <div className='flex items-center justify-between'>
            <div>
              <Select
                defaultValue='Русский'
                bordered={false}
                className={styles.customSelect}
                options={[
                  {value: 'Русский', label: 'Русский'},
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
            </div>
            {/* <div> */}
              <Socials/>
            {/* </div> */}
            <div className='flex items-center'>
              <div className='mr-3 text-xs'>
                {user?.isAdmin && (
                  <Link
                    href='/admin'
                    className='mr-3 hover:text-primary transition-colors duration-200'
                  >
                    Admin
                  </Link>
                )}
                {user ? 
                  <button 
                    className='capitalize hover:text-primary transition-colors duration-200' 
                    onClick={onLogout}
                  >
                    Выйти
                  </button> : 
                  <button 
                    onClick={() => router.replace('/auth')} 
                    className='capitalize hover:text-primary transition-colors duration-200'
                  >
                    Войти
                  </button>
                }
              </div>
              <div>
                {userData && (userData.avatarPath ? (
                  <Image
                    alt={userData.name}
                    src={userData.avatarPath}
                    width={40}
                    height={40}
                    className='mr-3 block rounded-full'
                  />
                  ) : (
                  <span>{userData.name.charAt(0)}</span>
                  )
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className='border-b border-gray py-5'>
        {/* middle */}
        <Container>
          <div className='flex items-center'>
            <Link href='/' className='mr-auto'>
              <Image
                priority 
                src='/images/JdmPower-logo-svg-2.svg'
                alt='JdmPower logo'
                width={250}
                height={82}
              />
            </Link>

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
              number={profile?.favorites.length}
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
