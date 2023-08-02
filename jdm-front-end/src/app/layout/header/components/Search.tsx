// 'use client'

import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchField: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')

	const { push } = useRouter()

	return (
		<div className='relative w-6/12 mr-10'>
			<div
				className=' flex flex-1 rounded-l-md overflow-hidden'
				// style={{
				// 	gridTemplateColumns: '1fr 0.1fr'
				// }}
			>
				<input
					className='text-sm py-3 px-4 w-full text-secondary outline-none'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
					placeholder='Search...'
				/>
				<button
					onClick={() => push(`/shop?searchTerm=${searchTerm}`)}
					className='bg-primary text-white flex items-center justify-center py-3 px-8 text-xs font-medium rounded-r-md'
				>
          Search
					{/* <BsSearch /> */}
				</button>
			</div>
		</div>
	)
}

export default SearchField;
