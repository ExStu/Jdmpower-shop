'use client'

import Link from 'next/link'
import { FC } from 'react'

const AdminNavbar:FC = () => {
  return (
    <div className='flex items-center justify-between py-4'>
      <Link href='/admin/products' className='mr-4 capitalize hover:text-primary transition-colors duration-200'>Products</Link>
      <Link href='/admin/news' className='mr-4 capitalize hover:text-primary transition-colors duration-200'>News</Link>
      <Link href='/admin/reviews' className='mr-4 capitalize hover:text-primary transition-colors duration-200'>Reviews</Link>
      <Link href='/admin/categories' className='mr-4 capitalize hover:text-primary transition-colors duration-200'>Categories</Link>
      <Link href='/admin/manufactures' className='mr-4 capitalize hover:text-primary transition-colors duration-200'>Manufactures</Link>
      <Link href='/admin/orders' className='mr-4 capitalize hover:text-primary transition-colors duration-200'>Orders</Link>
    </div>
  )
}

export default AdminNavbar;
