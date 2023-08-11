'use client'

import { Carousel } from 'antd'
import Image from 'next/image'
import { FC } from 'react'
import { ICarouselItem } from './carousel.interface'

interface ICarousel {
  items: ICarouselItem[]
  className?: string
  // title?: string
}

const CarouselHome: FC<ICarousel> = ({
  items,
  className
}) => {
  return (
    <div className='mb-10 z-40'>
      <Carousel autoplay draggable>
        {items.map(item => (
          <div className='cursor-grab'>
            <Image
              src={item.image}
              alt={item.title}
              width={1920}
              height={500}
              className='object-cover h-[500px]'
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselHome;
