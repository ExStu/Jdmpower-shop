'use client'

import { FC } from 'react'
import { IBrandItem } from './brands.interface'
import Image from 'next/image'
import Heading from '../Heading'
import styles from './Brands.module.scss'


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

  const half = Math.ceil(items.length / 2);

  const firstHalf = items.slice(0, half)
  const secondHalf = items.slice(half)

  console.log(firstHalf.length);
  console.log(secondHalf.length);

  return (
    // 'py-10'
    <>
      {title && <Heading className='mb-5'>{title}</Heading>}
      <div className={styles.logos}>
        {/* grid grid-cols-7 gap-5 */}
        <div className={styles.logos__slide}>
          {firstHalf.map(item => (
            <div className='  px-4 flex items-center justify-center aspect-[16/9] object-cover h-[90px]'>
              <Image
                src={item.image}
                alt={item.title}
                width={150}
                height={90}
              />
            </div>
          ))}
        </div>
        <div className={styles.logos__slide}>
          {firstHalf.map(item => (
            <div className='  px-4 flex items-center justify-center aspect-[16/9] object-cover h-[90px]'>
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
      <div className={styles.logos}>
        {/* grid grid-cols-7 gap-5 */}
        <div className={[styles.logos__slide, styles.logos__slide_reverse].join(' ')}>
          {secondHalf.map(item => (
            <div className='  px-4 flex items-center justify-center aspect-[16/9] object-cover h-[90px]'>
              <Image
                src={item.image}
                alt={item.title}
                width={150}
                height={90}
              />
            </div>
          ))}
        </div>
        <div className={[styles.logos__slide, styles.logos__slide_reverse].join(' ')}>
          {secondHalf.map(item => (
            <div className='  px-4 flex items-center justify-center aspect-[16/9] object-cover h-[90px]'>
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
    </>
  )
}

export default Brands;
