'use client'

import { FC } from 'react'

import Heading from '@/ui/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'

import { useAdminManufactures } from './useAdminManufactures'

const Manufactures: FC = () => {
	const { data, isFetching, mutate } = useAdminManufactures()

	return (
		<>
			<Heading className='mb-7'>Manufactures</Heading>
			<AdminList
				isLoading={isFetching}
				listItems={data}
				removeHandler={mutate}
			/>
		</>
	)
}

export default Manufactures
