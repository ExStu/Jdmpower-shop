'use client'

import { ProductService } from '@/services/product/product.service'
import { IProduct } from '@/types/product.interface'
import AddToCartButton from '@/ui/catalog/product-item/product-actions/AddToCartButton'
import FavoriteButton from '@/ui/catalog/product-item/product-actions/FavoriteButton'
import { convertPrice } from '@/utils/convertPrice'
import { useQuery } from '@tanstack/react-query'
import { Divider } from 'antd'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import SimilarProducts from './components/SimilarProducts'
import LeaveReviewForm from './components/LeaveReviewForm'
import ReviewItem from './components/ReviewItem'
import Heading from '@/ui/Heading'
import { ProductGallery } from '@/ui/catalog/product-item/ProductGallery'
import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'

interface IProductPage {
  // initialProduct: IProduct
  similarProducts: IProduct[]
  slug: string
}

const Product: FC<IProductPage> = ({similarProducts, slug}) => {

  const pathname = usePathname()

  const { data, isFetching } = useQuery(
    ['autocomplete'],
    () => ProductService.getBySlug(slug), {enabled: !!slug}
  )
  // pathname.split('/product/').join('')

  const product = data?.data

  if(!product) return null
  // const { data: product } = useQuery(
	// 	['get product', initialProduct.id],
	// 	() => ProductService.getBySlug(slug),
	// 	{
	// 		initialData: initialProduct,
	// 		enabled: !!slug
	// 	}
	// )

  // console.log(pathname.split('/product/').join(''));
  // console.log(data?.data);
  return (
    <>
      {/* {product && ( */}
        <div className='bg-white p-6 flex gap-x-10'>
          <div>
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
            <Divider/>
            <div className='flex gap-x-5'>
              <AddToCartButton preview product={product}/>
              <FavoriteButton productId={product.id}/>
            </div>
          </div>

        </div>
      {/* // )} */}
      <SimilarProducts similarProducts={similarProducts}/>
      <Heading>Reviews</Heading>
      <div className='grid grid-cols-4 gap-10'>
        {product.reviews.map(review => (
          <ReviewItem key={review.id} review={review}/>
        ))}
      </div>
      <LeaveReviewForm productId={product?.id}/>
    </>
  )
}

export default Product;
