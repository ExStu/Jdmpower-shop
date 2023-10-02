import Image from 'next/image'
import { FC } from 'react'

import { ICartItem } from '@/types/cart.interface'

import { convertPrice } from '@/utils/convertPrice'

import styles from '../Cart.module.scss'

import { useActions } from '@/hooks/useActions'
import CartActions from './cart-actions/CartActions'
import {FiTrash} from 'react-icons/fi'

interface ICartItemFull {
	item: ICartItem
	full?: boolean
}

const CartItem: FC<ICartItemFull> = ({ item, full }) => {

	const { removeFromCart, changeQuantity } = useActions()

	return (
		<div className={full ? 'flex border-b border-x border-gray' : styles.item}>
			{full && (
				<div className='flex items-center justify-center px-4 w-40'>
					<button type='button' onClick={() => removeFromCart({ id: item.id })} className='hover:text-primary transition-colors duration-200'>
						<FiTrash size={30}/>
					</button>
				</div>
			)}
			<Image
				className={full ? 'p-4 border-x border-gray' : ''}
				src={item.product.images[0]}
				width={full ? 150 : 100} 
				height={full ? 150 : 100} 
				alt={item.product.name}
			/>
			<div className={full ? 'flex items-center' : ''}>
				<div className={full ? 
					`border-r border-gray h-full flex items-center justify-center px-4 w-80 text-sm`
					 : 
					styles.name}
				>
					{item.product.name}
				</div>
				{full && (
					<div className='border-r border-gray h-full flex items-center px-4 text-sm font-medium w-44 justify-center'>
						{item.product.sku}
					</div>
				)}
				<div 
					className={full ? 
						'border-r border-gray h-full flex justify-center items-center px-4 w-44 font-semibold' 
							: 
						styles.price
				}>
					{/* {convertPrice(item.product.price)} */}
					{item.product.discount > 0 ? (
						<div className={'flex flex-col'}>
							<span className='text-xs line-through mr-1 text-dark-gray'>{convertPrice(item.product.price)}</span>
							<span className='text-primary'>{convertPrice(item.product.price - (item.product.price * item.product.discount))}</span>
						</div>
					) : (
						<span>{convertPrice(item.product.price)}</span>
					)}
				</div>

				<CartActions full={full} item={item} />
				{full && (
					<div className='w-44 py-4 flex justify-center'>
						{item.product.discount > 0 ? (
							<span className='text-shark'>
								{convertPrice(item.product.price - (item.product.price * item.product.discount))}
							</span>
						) : (
							<span>{convertPrice(item.price * item.quantity)}</span>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default CartItem
