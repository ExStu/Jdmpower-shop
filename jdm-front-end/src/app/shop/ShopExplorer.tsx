'use client'

import { ProductService } from '@/services/product/product.service'
import { TypePaginationProducts } from '@/types/product.interface'
import Catalog from '@/ui/catalog/Catalog'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import Pagination from './pagination/Pagination'
import { useFilters } from './useFilters'
// import Sidebar from './sidebar/Sidebar'
import Filters from './filters/Filters'
import SortDropdown from './sort/SortDropdown'
import Container from '@/ui/Container'

interface IShopExplorer {
  initialProducts: TypePaginationProducts
}

const ShopExplorer: FC<IShopExplorer> = ({
  initialProducts
}) => {

  const { isFilterUpdated, queryParams, updateQueryParams } = useFilters()

	const { data, isFetching } = useQuery(
		['product explorer', queryParams],
		() => ProductService.getAll(queryParams),
		{
			initialData: initialProducts,
			enabled: isFilterUpdated
		}
	)

  return (
    <Container>

      <div className='flex py-8 justify-between'>
        <div className='w-2/5 mr-5 border border-gray bg-white px-6 py-4'>
          {/* left side */}
          <Filters/>

        </div>
        <div>
          <div className='mb-7'>
            <SortDropdown length={initialProducts.length}/>
          </div>
          {/* right side */}
          <Catalog className='grid-cols-4 gap-5' products={data.products} isLoading={isFetching}/>
          <Pagination
            changePage={page => updateQueryParams('page', page.toString())}
            currentPage={queryParams.page}
            numberPages={Math.ceil(data.length / +queryParams.perPage)}
          />
        </div>
      </div>
    </Container>
  )
}

export default ShopExplorer;
