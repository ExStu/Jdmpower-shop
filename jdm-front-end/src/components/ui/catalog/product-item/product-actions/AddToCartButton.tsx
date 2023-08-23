import { FC } from 'react'
// import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri'
import { RiShoppingCart2Line, RiShoppingCart2Fill } from 'react-icons/ri'
import {FcCheckmark} from 'react-icons/fc'
import {AiOutlineCheck} from 'react-icons/ai'

import { useActions } from '@/../src/hooks/useActions'
import { useCart } from '@/../src/hooks/useCart'
import { IProduct } from '@/../src/types/product.interface'

interface IAddToCartButton {
	product: IProduct
	preview?: boolean
}

const AddToCartButton: FC<IAddToCartButton> = ({ product, preview }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<div>
			<button
				className={preview ? 
					'text-black border border-primary hover:text-white hover:bg-primary transition-colors duration-200 bg-white flex items-center justify-center rounded-md p-2'
					
						: 
					'text-black hover:text-white hover:bg-primary transition-colors duration-200 bg-white flex items-center justify-center rounded-md p-2'
				}
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
				{/* <span className='mr-1'>Add to cart</span> */}
				{currentElement ?	(
					<div className='flex items-center'>
						<span className='block mr-1 text-sm'>Добавлен</span>
						<AiOutlineCheck size={22}/>
					</div>
				) : (
					<div className='flex items-center'>
						<span className='block mr-1 text-sm'>В корзину</span>
						<RiShoppingCart2Line size={22} />
					</div>
				) }
			</button>
		</div>
	)
}

export default AddToCartButton
