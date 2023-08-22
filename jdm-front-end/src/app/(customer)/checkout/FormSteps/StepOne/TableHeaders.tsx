import {FC} from 'react'

const TableHeaders: FC = () => {
  return (
    <ul className='flex items-center text-center border-x border-t border-gray border-b-2 border-b-primary py-4 text-sm font-semibold'>
      <li className='w-40'>Remove</li>
      <li className='w-36'>Image</li>
      <li className='w-80 mr-1'>Product</li>
      <li className='w-44 mr-1'>SKU</li>
      <li className='w-40 mr-3'>Price</li>
      <li className='w-44 mr-3'>Quantity</li>
      <li className='w-40'>Total</li>
    </ul>
  )
}

export default TableHeaders;
