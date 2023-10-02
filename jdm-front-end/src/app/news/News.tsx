'use client'

import { INews } from '@/types/news.interface'
import Heading from '@/ui/Heading'
import { formatDate } from '@/utils/format-date'
import moment from 'moment'
import Image from 'next/image'
import { FC } from 'react'
import PreviewButton from './PreviewButton'

interface INewsPage {
  news: INews[]
  // title?: string
  // click: () => void
}

const News: FC<INewsPage> = ({
  news,
  // title
}) => {

  // const createDate = new Date()

  return (
    <>
      {/* <Heading>{title}</Heading> */}
      {news.map(post => (
        <div key={post.id} className='flex border border-gray p-5'>
          <div className='mr-4'>
            <Image width={320} height={320} src={post.image} alt={post.title}/>
            {/* {post.image} */}
          </div>
          <div className='flex flex-col w-2/3'>

            <h3 className='mb-2 font-semibold text-xl'>{post.title}</h3>
            <div className='border-b border-gray pb-4 text-xs'>Posted on : 
              <span className='text-primary'> {moment(post.createdAt.toString()).format('LL')}</span>
            </div>
            <p className='mb-5 pt-4 text-sm line-clamp-4'>{post.description}</p>
            {/* <div className='uppercase text-primary font-semibold text-xs hover:underline cursor-pointer'>Read more</div> */}
            <PreviewButton post={post}/>
          </div>
        </div>
      ))}
    </>
  )
}

export default News;
