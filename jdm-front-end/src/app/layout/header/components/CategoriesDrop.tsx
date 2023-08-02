import Sidebar from '@/app/layout/sidebar/Sidebar'
import { current } from '@reduxjs/toolkit'
import { FC, useState } from 'react'
import {IoIosMenu} from 'react-icons/io'

const CategoriesDrop: FC = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(current => !current)
  }

  return (
    <div className='relative cursor-pointer' onClick={handleClick}>
      <div className='flex items-center pl-4 pr-16 pr h-[60px] rounded-t-md uppercase bg-primary'>
        <IoIosMenu size={25} className='mr-3'/> <span className='mr-12'>All categories</span>
      </div>
      {isOpen && (
        <div className='absolute left-0 top-13 bg-gray w-full select-none'>
          <Sidebar/>
        </div>
      )}
    </div>
  )
}

export default CategoriesDrop;
