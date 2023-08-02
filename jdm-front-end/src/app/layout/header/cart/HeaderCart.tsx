'use client'

import Link from 'next/link'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

import SquareButton from '@/ui/button/SquareButton'

import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'

import { convertPrice } from '@/utils/convertPrice'
import {RxCross2} from 'react-icons/rx'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { items, total } = useCart()

	return (
		<div ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => {
					setIsShow(!isShow)
				}}
				number={items.length}
			/>

			{isShow && (
        <div className='fixed left-0 top-0 z-10 w-full h-screen bg-black/30'>

          <div className={styles.cartWrapper}>
            <div className='flex items-center justify-between border-b border-b-black/30 pb-4 font-normal text-lg mb-2'>
              <h3>Cart</h3>
              <RxCross2 size={28} className='cursor-pointer' onClick={() => {setIsShow(!isShow)}}/>
            </div>

            <div className={styles.cart}>
              {items.length ? (
                items.map(item => <CartItem item={item} key={item.id} />)
              ) : (
                <div className='font-light'>Cart is empty!</div>
              )}
            </div>
            <div className={styles.footer}>
              <div>Total:</div>
              <div>{convertPrice(total)}</div>
            </div>
            {!!items.length && (
              <div className='text-center mt-7 mb-5'>
                <Link
                  className='py-3 bg-primary w-full block rounded-sm uppercase text-xs font-medium text-white'
                  href='/checkout'
                  onClick={() => setIsShow(false)}
                >
                  Checkout
                </Link>
              </div>
            )}
          </div>
        </div>
			)}
		</div>
	)
}

export default Cart
