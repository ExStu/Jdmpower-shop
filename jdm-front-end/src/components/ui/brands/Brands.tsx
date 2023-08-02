'use client'

import { FC } from 'react'
import { IBrandItem } from './brands.interface'
import Image from 'next/image'

interface IBrands {
  items: IBrandItem[]
  className?: string
}

const Brands: FC<IBrands> = ({
  items,
  className
}) => {
  return (
    <div className='grid grid-cols-7 gap-5 py-10'>
      {items.map(item => (
        <div className=' bg-gray px-4 flex items-center justify-center aspect-square object-cover max-h-44 rounded-sm'>
          <Image
            src={item.image}
            alt={item.title}
            width={150}
            height={90}
          />
        </div>
      ))}
    </div>
  )
}

export default Brands;
