import { FC } from 'react'
// import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri'
import { RiShoppingCart2Line, RiShoppingCart2Fill } from 'react-icons/ri'

import { useActions } from '@/../src/hooks/useActions'
import { useCart } from '@/../src/hooks/useCart'
import { IProduct } from '@/../src/types/product.interface'

const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<div>
			<button
				className='flex items-center uppercase text-sm bg-primary text-white py-1.5 px-3 rounded-sm'
				onClick={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({
								product,
								quantity: 1,
								price: product.price
						  })
				}
			>
				<span className='mr-1'>Add to cart</span>
				{currentElement ? <RiShoppingCart2Fill /> : <RiShoppingCart2Line />}
			</button>
		</div>
	)
}

export default AddToCartButton
