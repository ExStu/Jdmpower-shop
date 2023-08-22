import { IProduct } from '@/types/product.interface'
import { convertPrice } from '@/utils/convertPrice'
import { Divider, Modal } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { BiExpand } from 'react-icons/bi'
import { TfiSearch, TfiEye } from 'react-icons/tfi'
import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'
import cn from 'clsx'
import {HiMiniChevronDoubleRight} from 'react-icons/hi2'
import {BsArrowUpRight} from 'react-icons/bs'
import { ProductGallery } from '../ProductGallery'

interface IPreviewButton {
  product: IProduct
  className?: string
}

const PreviewButton: FC<IPreviewButton> = ({
  product,
  className
}) => {

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  
  // <PreviewButton product={product}/>
  
  return (
    <>
      <button 
        className={cn(
          `text-black hover:text-white hover:bg-primary transition-colors duration-200 bg-white shadow-md flex items-center justify-center rounded-md p-2`, className
        )}
        onClick={openModal}
      >
        <TfiEye size={25}/>
      </button>

      <Modal footer={null} open={isOpen} onCancel={closeModal} width={'50%'}>
        <div className='flex gap-x-8'>
          <div>
            {/* left */}
            {/* <Image src={product.images[0]} alt={product.name} width={500} height={500}/> */}
            <ProductGallery images={product.images} alt={product.name}/>
          </div>
          <div className='flex flex-col w-1/2 pr-4'>
            {/* right */}
            <h3 className='font-medium text-lg mb-1'>{product.name}</h3>
            <p className='mb-2'><span className='font-semibold uppercase'>Sku&nbsp;</span>{product.sku}</p>
            <b 
              className='block font-semibold text-lg mb-2'
            >
              {product.discount > 0 ? (
                <div>
                  <span className='text-sm line-through mr-1 text-dark-gray'>{convertPrice(product.price)}</span>
                  <span className='text-primary'>{convertPrice(product.price - (product.price * product.discount))}</span>
                </div>
              ) : (
                <span>{convertPrice(product.price)}</span>
              )}
            </b>
            {product.inStock ? (
              <div className='p-1 flex self-start bg-green rounded-sm text-xs text-white'>
                <span>In Stock</span>
              </div>) 
                : 
              (
                <div className='p-1 flex self-start bg-tertiary rounded-sm text-xs text-white'>
                  <span>Order</span>
                </div>
              )
            }
            <Divider/>
            <p className='mb-auto'>{product.description}</p>
            
            <div className='flex gap-x-5'>
              <Link href={`/product/${product.slug}`} className='text-black hover:text-white hover:bg-primary transition-colors duration-200 bg-white border border-primary flex items-center self-start rounded-md mb-2 p-2'>
                <span className='text-sm mr-2'>Check more</span>
                <BsArrowUpRight size={20}/>
              </Link>
              <AddToCartButton preview product={product}/>
              <FavoriteButton productId={product.id}/>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default PreviewButton;
