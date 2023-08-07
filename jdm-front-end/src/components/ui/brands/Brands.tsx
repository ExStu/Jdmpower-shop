'use client'

import { FC } from 'react'
import { IBrandItem } from './brands.interface'
import Image from 'next/image'
import Heading from '../Heading'

interface IBrands {
  items: IBrandItem[]
  className?: string
  title?: string
}

const Brands: FC<IBrands> = ({
  items,
  className,
  title
}) => {
  return (
    <div className='py-10'>
      {title && <Heading className='mb-5'>{title}</Heading>}
      <div className='grid grid-cols-7 gap-5'>
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
    </div>
  )
}

export default Brands;
