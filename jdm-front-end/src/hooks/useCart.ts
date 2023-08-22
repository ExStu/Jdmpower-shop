import { useAppSelector } from './useRedux'

export const useCart = () => {
	const items = useAppSelector(state => state.cart.items)

	const discountTotal = items.reduce((acc, item) => acc + (item.price * item.product.discount) * item.quantity, 0)

	const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

	return { items, total, discountTotal }
}
