// 'use client'

import { useFilters } from '@/app/shop/useFilters'
import { ProductService } from '@/services/product/product.service'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import AutocompleteItem from './AutocompleteItem'
import {RxCross1} from 'react-icons/rx'

const SearchField: FC = () => {

	const { isFilterUpdated, queryParams } = useFilters()
	
	const { data, isFetching } = useQuery(
			['autocomplete', queryParams],
			() => ProductService.getAll(),
		)
			
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(false)
		setSearchTerm('')
	}

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsOpen(true)
		setSearchTerm(e.target.value)

		if (e.target.value === '') setIsOpen(false)
	}

	const handleReset = () => {
		setSearchTerm('')
		setIsOpen(false)
	}

	const handleSearch = () => {
		setIsOpen(false)
		push(`/shop?searchTerm=${searchTerm}`)
	}

	
	const filteredData = 
		data?.products.filter(item => (item.name.toLowerCase().includes(searchTerm.toString().toLowerCase())) || (item.sku.toLowerCase().includes(searchTerm.toString().toLowerCase())))
	
	const { push } = useRouter()

	return (
		<div className='relative w-6/12 mr-10'>
			<div
				className=' flex flex-1 rounded-l-md relative'
				// style={{
				// 	gridTemplateColumns: '1fr 0.1fr'
				// }}
			>
				<input
					className='relative text-sm py-3 px-4 w-full text-secondary outline-none border-y-2 border-l-2 border-gray rounded-l-md focus:border-primary transition-colors duration-200'
					value={searchTerm}
					onChange={handleOnChange}
					placeholder='Search...'
				/>
				{isOpen && (
					<button
					className='absolute top-4 right-32'
					onClick={handleReset}
				>
					<RxCross1/>
				</button>
				)}
				<button
					onClick={handleSearch}
					className='bg-primary text-white flex items-center justify-center py-3 px-8 text-xs font-medium rounded-r-md'
				>
          Search
					{/* <BsSearch /> */}
				</button>
			</div>
			{isOpen && filteredData?.length !== 0 ? 
				<div className='max-h-60 overflow-auto absolute top-16 left-0 text-sm w-full text-secondary border-2 border-gray rounded-md bg-white z-50'>
					{filteredData?.map(productItem => (
						<button className='block w-full' onClick={handleClick}>
							<AutocompleteItem productItem={productItem}/>
						</button>
				))}
				</div> 
					: null}
			
		</div>
	)
}

export default SearchField;
