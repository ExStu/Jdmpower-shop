// 'use client'

import { IProduct } from '@/types/product.interface'
import { convertPrice } from '@/utils/convertPrice'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import AddToCartButton from './product-actions/AddToCartButton'
import FavoriteButton from './product-actions/FavoriteButton'
import PreviewButton from './product-actions/PreviewButton'

interface IProductItem {
  product: IProduct
  // className?: string
  row?: boolean
}


const ProductItem: FC<IProductItem> = ({
  product,
  row
}) => {

  const router = useRouter()
//  className='cursor-pointer' onClick={() => router.push(`/product/${product.slug}`)}
  return (
    <div>
      <div
        className={row ? 
          `flex border-b border-x border-gray`
          : 
          `flex flex-col bg-transparent rounded-md overflow-hidden group cursor-pointer`
        }
        
      >
        <div className='relative flex'>
          {row && (
            <div className='flex items-center justify-center px-4 w-44'>
              <FavoriteButton row productId={product.id}/>
            </div>
          )}
          <div className={row ?
                `p-4 border-x border-gray` 
                  : `min-h-[245px] min-w-[245px] rounded-lg overflow-hidden relative`}>
            {product.images.length ? (

              <Image 
                className={
                  `group-hover:contrast-75 transition-all duration-300 group-hover:scale-105 scale-100 cursor-pointer`
                }
                width={row ? 150 : 245} 
                height={row ? 150 : 245} 
                src={product.images[0]} 
                alt={product.name}
                onClick={() => router.push(`/product/${product.slug}`)}
              />
            ) : (
              <Image
              className={
                `group-hover:contrast-75 transition-all duration-300 group-hover:scale-100 scale-110 cursor-pointer`
              }
                width={row ? 150: 245}
                height={row ? 150 : 245} 
                src='/images/product-blank.png'
                alt='Jdmpower logo'
                onClick={() => router.push(`/product/${product.slug}`)}
              />
            )}
            {!row && (product.inStock ? (
              <div className='absolute top-2 right-2 z-3 p-1 bg-green rounded-sm text-xs text-white'>
                <span>In Stock</span>
              </div>
            ) : (
              <div className='absolute top-2 right-2 z-3 p-1 bg-tertiary rounded-sm text-xs text-white'>
                <span>Order</span>
              </div>
            ))}
            {!row && (product.discount > 0 && (
              <div className='absolute top-2 left-2 z-3  p-1 bg-primary rounded-sm text-xs text-white'>
                <span>-{product.discount * 100}%</span>
              </div>
            ))}
          </div>
          <PreviewButton className='opacity-0 group-hover:opacity-100 absolute top-20 left-24' product={product}/>
          <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-50 absolute w-full px-6 bottom-5 z-10'>
            <div className='flex items-center justify-between'>
              {/* <AddToCartButton product={product}/>   */}
              <FavoriteButton productId={product.id}/>
            </div>
          </div>
        </div>
        <div className={row ? `flex` : `pt-2 pb-4 px-4`}>
          <h3 
            className={row ? 
            `border-r border-gray h-full flex items-center justify-center px-4 w-80 text-sm hover:text-primary cursor-pointer transition-colors duration-200`
             : 
            `mb-1 text-xs hover:text-primary cursor-pointer transition-colors duration-200`
            }
            onClick={() => router.push(`/product/${product.slug}`)}
          >
            {product.name}
          </h3>
          <h3
            className={row ?
              `border-r border-gray h-full flex items-center px-4 text-sm font-medium w-44 justify-center`
                : 
              `mb-1 text-xs`
            }>
            <b className='mr-1 uppercase font-semibold text-shark'>{!row && `Sku`}</b>
            {product.sku}
          </h3>
          {/* <h4 className='mb-2 text-xs'>{product.category.name}</h4> */}
          <div 
            className={row ? 
              `border-r border-gray h-full flex justify-center items-center px-4 w-44 font-semibold` 
                : 
              `mb-2 font-semibold`
            }>
              {product.discount > 0 ? (
                <div className={row ? 'flex flex-col' : ''}>
                  <span className='text-sm line-through mr-1 text-dark-gray'>{convertPrice(product.price)}</span>
                  <span className='text-primary'>{convertPrice(product.price - (product.price * product.discount))}</span>
                </div>
              ) : (
                <span>{convertPrice(product.price)}</span>
              )}
          </div>
          {row && (
            <div className='border-r border-gray px-4 h-full flex items-center justify-center w-44 text-sm'>
              {product.inStock ? (
              <div className=''>
                <span>In Stock</span>
              </div>
            ) : (
              <div className=''>
                <span>Order</span>
              </div>
            )}
            </div>
          )}
          {row && (
            <div className='px-4 h-full flex items-center justify-center w-44'>
              <AddToCartButton product={product}/>  
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductItem;
