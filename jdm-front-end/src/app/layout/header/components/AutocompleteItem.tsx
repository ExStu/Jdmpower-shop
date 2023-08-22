import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const AutocompleteItem: FC<{productItem: IProduct}> = ({productItem}) => {

  return (
    <Link href={`/product/${productItem.slug}`} className='flex items-center p-3 hover:bg-gray'>
      <div className='mr-3'>
        <Image src={productItem.images[0]} alt={productItem.name} width={50} height={50}/>
      </div>
      <div className='flex flex-col'>
        <h3 className=''>{productItem.name}</h3>
        <span className='self-start'>{productItem.sku}</span>
      </div>
    </Link>
  )
}

export default AutocompleteItem;
