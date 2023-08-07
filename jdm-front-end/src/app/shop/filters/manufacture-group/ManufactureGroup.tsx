import {FC} from 'react'
import { useFilters } from '../../useFilters'
import { useManufactures } from '@/hooks/queries/useManufactures'
import FilterWrapper from '../FilterWrapper'
import Loader from '@/ui/Loader'
import Checkbox from '@/ui/checkbox/Checkbox'

const ManufactureGroup: FC = () => {
  const { queryParams, updateQueryParams } = useFilters()
  const {data, isLoading} = useManufactures()

	return (
		<FilterWrapper title='Manufactures'>
			{isLoading ? (
				<Loader />
			) : data?.length ? (
				data.map(manufacture => {
					const isChecked = queryParams.manufactureId === manufacture.id.toString()
					return (
						<Checkbox
							isChecked={isChecked}
							onClick={() =>
								updateQueryParams(
									'manufactureId',
									isChecked ? '' : manufacture.id.toString()
								)
							}
							key={manufacture.id}
							className='mb-2 text-sm'
						>
							{manufacture.name}
						</Checkbox>
					)
				})
			) : (
				<p>Manufactures not found!</p>
			)}
		</FilterWrapper>
	)
}

export default ManufactureGroup;
