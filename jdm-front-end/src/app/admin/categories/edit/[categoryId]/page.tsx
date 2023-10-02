// import Products from './Products'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import CategoryEdit from './CategoryEdit'

export const metadata = {
	title: 'Products',
	...NO_INDEX_PAGE
}

export default function ProductPage() {
	return (
    <CategoryEdit/>
  )
}
