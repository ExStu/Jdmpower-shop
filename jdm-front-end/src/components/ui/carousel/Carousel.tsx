'use client'

import { Carousel } from 'antd'
import Image from 'next/image'
import { FC, useRef } from 'react'
import { ICarouselItem } from './carousel.interface'
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi'

interface ICarousel {
  items: ICarouselItem[]
  className?: string
  // title?: string
}

const CarouselHome: FC<ICarousel> = ({
  items,
  className
}) => {

  const carouselRef = useRef()

  return (
    <div className='relative'>
      <Carousel autoplay draggable easing='ease-in' className='z-10' ref={carouselRef}>
        {items.map(item => (
          <div key={item.title}>
            <Image
              priority
              src={item.image}
              alt={item.title}
              width={1360}
              height={500}
              className='object-cover h-[500px]'
            />
          </div>
        ))}
      </Carousel>
      {/* <div className='absolute z-50 top-1/2'> */}
        <button onClick={() => carouselRef.current.next()} className='absolute z-50 bottom-1/2 right-3 text-white p-4 border border-white'><BiRightArrow /></button>
        <button onClick={() => carouselRef.current.prev()} className='absolute z-50 bottom-1/2 left-3 text-white p-4 border border-white'><BiLeftArrow /></button>
      {/* </div> */}
    </div>
  )
}

export default CarouselHome;
