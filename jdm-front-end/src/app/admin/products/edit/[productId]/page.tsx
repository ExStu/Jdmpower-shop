// import Products from './Products'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import ProductEdit from './ProductEdit'

export const metadata = {
	title: 'Products',
	...NO_INDEX_PAGE
}

export default function ProductPage() {
	return (
    <ProductEdit/>
  )
}
