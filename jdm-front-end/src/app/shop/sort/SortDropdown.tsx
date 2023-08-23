import { FC } from 'react'

import Select from '@/ui/select/Select'

import { useFilters } from '../useFilters'

import { SORT_SELECT_DATA } from './sort-select.data'
import { EnumProductSort } from '@/services/product/product.types'

interface ISortDropdown {
  length : number
}

const SortDropdown: FC<ISortDropdown> = ({length}) => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
    <div className='border border-gray flex justify-between items-center py-2 px-2'>
      <div className='text-xs'>
        {length < 8 ? `Показано 1-${length} из ${length} результатов` : `Показано 1-8 из ${length} результатов`}
        {/* Showing 1-8 of {length} results */}
      </div>
      <div className='text-right z-10 bg-white px-3 py-2 border border-gray rounded-sm text-sm'>
        <Select<EnumProductSort>
          data={SORT_SELECT_DATA}
          onChange={value => updateQueryParams('sort', value.key.toString())}
          value={SORT_SELECT_DATA.find(value => value.key === queryParams.sort)}
          title='Сортировать по'
        />
      </div>
    </div>
	)
}

export default SortDropdown
