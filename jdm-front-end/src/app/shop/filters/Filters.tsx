import { FC } from 'react'

import CategoryGroup from './category-group/CategoryGroup'
import PriceGroup from './price-group/PriceGroup'
import ManufactureGroup from './manufacture-group/ManufactureGroup'

const Filters: FC = () => {
	return (
		<div>
			<PriceGroup />
			<CategoryGroup />
			<ManufactureGroup />
		</div>
	)
}

export default Filters
