'use client'

import { useCategories } from '@/hooks/queries/useCategories'
import Loader from '@/ui/Loader'
import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { convertToMenuItems } from './conver-to-menu-items'

const Sidebar: FC = () => {
	const { data, isLoading } = useCategories()
	const pathname = usePathname()


  return (
    <div>
      {isLoading ? ( <Loader/>) : data ? (
        <>
          <ul className='py-2 z-50'>
            {convertToMenuItems(data).map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block text-sm py-2 px-10 hover:text-primary transition-colors duration-200',
                    pathname === item.href ? 'text-primary' : 'text-black'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div> Categories not found!</div>
      )}
    </div>
  )
}

export default Sidebar;
