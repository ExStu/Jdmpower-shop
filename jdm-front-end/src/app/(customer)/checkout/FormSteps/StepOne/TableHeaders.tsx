import {FC} from 'react'

const TableHeaders: FC = () => {
  return (
    <ul className='flex items-center text-center border-x border-t border-gray border-b-2 border-b-primary py-4 text-sm font-semibold'>
      <li className='w-40'>Удалить</li>
      <li className='w-36'>Изображение</li>
      <li className='w-80 mr-1'>Товар</li>
      <li className='w-44 mr-1'>Артикул</li>
      <li className='w-40 mr-3'>Цена</li>
      <li className='w-44 mr-3'>Количество</li>
      <li className='w-40'>Итого</li>
    </ul>
  )
}

export default TableHeaders;
