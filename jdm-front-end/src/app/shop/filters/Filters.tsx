import { FC } from 'react'

import CategoryGroup from './category-group/CategoryGroup'
import PriceGroup from './price-group/PriceGroup'

const Filters: FC = () => {
	return (
		<div>
			<PriceGroup />
			<CategoryGroup />
		</div>
	)
}

export default Filters
