import {FC} from 'react'

const TableHeaders: FC = () => {
  return (
    <ul className='flex items-center text-center border-x border-t border-gray border-b-2 border-b-primary py-4 text-sm font-semibold'>
      <li className='w-40 mr-2'>Delete</li>
      <li className='w-40'>Image</li>
      <li className='w-80 mr-1'>Product</li>
      <li className='w-44'>SKU</li>
      <li className='w-40 mr-4'>Price</li>
      <li className='w-44'>Stock Status</li>
      <li className='w-40'>Add to cart</li>
    </ul>
  )
}

export default TableHeaders;
