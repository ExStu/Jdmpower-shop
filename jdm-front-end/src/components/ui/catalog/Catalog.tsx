'use client'

import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import ProductItem from './product-item/ProductItem'
import Loader from '../Loader'
import Heading from '../Heading'
import cn from 'clsx'

interface ICatalog {
  products: IProduct[], 
  isLoading?: boolean,
  title?: string,
  className?: string
  // isPagination: boolean
}

const Catalog: FC<ICatalog> = ({
  products,
  isLoading,
  title,
  className
  // isPagination = false
}) => {

  if (isLoading) return <Loader/>

  return (
    <section className='w-full'>
      {title && <Heading className='mb-5'>{title}</Heading>}
      {/* {isPagination && <SortDropdown/>} */}
      {products.length ? (
        <>
          <div className={cn(
            'grid grid-cols-4 gap-6', className
          )}>

            {products.map(product => <ProductItem key={product.id} product={product}/>)}
          </div>
          {/* {isPagination && <Button variant='dark'>Load more</Button>} */}
        </>
      ) : (
        <div>No results found</div>
      )}
    </section>
  )
}

export default Catalog;
