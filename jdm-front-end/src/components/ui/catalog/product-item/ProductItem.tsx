import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import { FC } from 'react'
import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'
import { convertPrice } from '@/utils/convertPrice'

const ProductItem: FC<{product: IProduct}> = ({
  product
}) => {
  return (
    <div className='flex flex-col bg-white rounded-md overflow-hidden'>
      <div>
        <Image width={245} height={245} src={product.images[0]} alt={product.name}/>
      </div>
      <div className='pt-2 pb-4 px-4'>
        <h3 className='mb-1 text-sm'>{product.name}</h3>
        <h4 className='mb-2 text-xs'>{product.category.name}</h4>
        <strong className='block mb-2 font-semibold'>{convertPrice(product.price)}</strong>
        <div className='flex items-center justify-between'>
          <AddToCartButton product={product}/>  
          <FavoriteButton productId={product.id}/>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;
