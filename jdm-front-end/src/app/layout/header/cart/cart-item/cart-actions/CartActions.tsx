import { FC } from 'react'
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { ICartItem } from '@/types/cart.interface'

interface ICartActions {
	item: ICartItem
	full?: boolean
}

const CartActions: FC<ICartActions> = ({ item, full }) => {
	const { removeFromCart, changeQuantity } = useActions()

	const { items } = useCart()
	const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity

	return (
		<div className={full ? 'w-44 py-4 flex justify-center items-center border-r border-gray h-full' : 'mt-3'}>
			<div className='flex items-center gap-3'>
				<button
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					disabled={quantity === 1}
					type='button'
				>
					<FiMinus fontSize={13} />
				</button>

				<input
					disabled
					readOnly
					value={quantity}
					className='w-10 bg-primary text-center text-white'
				/>

				<button type='button' onClick={() => changeQuantity({ id: item.id, type: 'plus' })}>
					<FiPlus fontSize={13} />
				</button>

				{!full && (
					<button
						onClick={() => removeFromCart({ id: item.id })}
						className='ml-3 text-dark-primary'
					>
						<FiTrash />
					</button>
				)}
			</div>
		</div>
	)
}

export default CartActions
