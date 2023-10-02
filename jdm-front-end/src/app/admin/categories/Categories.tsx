'use client'

import { FC } from 'react'

import Heading from '@/ui/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'

import { useAdminCategories } from './useAdminCategories'
import Button from '@/ui/button/Button'

const Categories: FC = () => {
	const { data, isFetching, deleteCategory, createCategory } = useAdminCategories()

	return (
		<>
			<Heading className='mb-7'>Categories</Heading>
			<Button onClick={createCategory} variant='dark'>Create</Button>
			<AdminList
				isLoading={isFetching}
				listItems={data}
				removeHandler={deleteCategory}
			/>
		</>
	)
}

export default Categories
