import { INews } from '@/types/news.interface'
import { Modal } from 'antd'
import Image from 'next/image'
import { FC, useState } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import moment from 'moment'

const PreviewButton: FC<{post: INews}> = ({post}) => {

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button onClick={openModal} className='flex items-center text-primary font-semibold text-xs hover:underline'>
        <span className='uppercase mr-2'>Read more</span>
        <BsArrowUpRight/>
      </button>

      <Modal footer={null} open={isOpen} onCancel={closeModal} width={'35%'} style={{top:30}}>
        <div className='flex flex-col p-10'>
          <div className='flex items-center justify-center mb-5'>
            <Image src={post.image} alt={post.title} width={500} height={500}/>
          </div>
          <h3 className='text-center mb-2 font-semibold text-xl'>{post.title}</h3>
          <div className='border-b border-gray pb-4 mb-5 text-xs text-center'>Posted on : 
            <span className='text-primary'> {moment(post.createdAt.toString()).format('LL')}</span>
          </div>
          <p>{post.description}</p>
        </div>
      </Modal>
    </>
  )
}

export default PreviewButton;
