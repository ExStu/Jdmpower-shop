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
  rowItem?: boolean
  // isPagination: boolean
}

const Catalog: FC<ICatalog> = ({
  products,
  isLoading,
  title,
  className,
  rowItem
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
            'grid ', className
          )}>

            {products.map(product => <ProductItem row={rowItem} key={product.id} product={product}/>)}
          </div>
          {/* {isPagination && <Button variant='dark'>Load more</Button>} */}
        </>
      ) : (
        <div className='h-[50vh]'>No results found</div>
      )}
    </section>
  )
}

export default Catalog;
