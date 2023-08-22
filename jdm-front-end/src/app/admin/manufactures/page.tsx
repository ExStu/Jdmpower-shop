import Manufactures from './Manufactures'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata = {
	title: 'Manufactures',
	...NO_INDEX_PAGE
}

export default function ManufacturesPage() {
	return <Manufactures />
}
