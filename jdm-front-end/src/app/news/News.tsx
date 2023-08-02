'use client'

import { INews } from '@/types/news.interface'
import { formatDate } from '@/utils/format-date'
import moment from 'moment'
import Image from 'next/image'
import { FC } from 'react'

interface INewsPage {
  news: INews[]
  // click: () => void
}

const News: FC<INewsPage> = ({
  news
}) => {

  // const createDate = new Date()

  return (
    <>
      {news.map(item => (
        <div className='flex border border-gray p-5'>
          <div className='mr-4'>
            <Image width={320} height={320} src={item.image} alt={item.title}/>
            {/* {item.image} */}
          </div>
          <div className='flex flex-col w-2/3'>

            <h3 className='mb-2 font-semibold text-xl'>{item.title}</h3>
            <div className='border-b border-gray pb-4 text-xs'>Posted on : 
              <span className='text-primary'> {moment(item.createdAt.toString()).format('LL')}</span>
            </div>
            <p className='mb-5 pt-4 text-sm'>{item.description}</p>
            <div className='uppercase text-primary font-semibold text-xs hover:underline cursor-pointer'>Read more</div>
          </div>
        </div>
      ))}
    </>
  )
}

export default News;
