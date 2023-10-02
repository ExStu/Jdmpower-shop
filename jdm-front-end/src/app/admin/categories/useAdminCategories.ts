import { useMutation, useQuery } from '@tanstack/react-query'

import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'

import { getAdminUrl } from '@/config/url.config'

import { CategoryService } from '@/services/category.service'
import { useRouter } from 'next/navigation'

export const useAdminCategories = () => {

	const router = useRouter()

	const { data, isFetching, refetch } = useQuery(
		['get admin categories'],
		() => CategoryService.getAll(),
		{
			select: ({ data }) =>
				data.map((category): IListItem => {
					return {
						id: category.id,
						viewUrl: `/category/${category.slug}`,
						editUrl: getAdminUrl(`/categories/edit/${category.id}`),
						items: [category.name, category.slug]
					}
				})
		}
	)

	const {mutate: createCategory} = useMutation(
		['create category'],
		() => CategoryService.create(),
		{
      onSuccess({data: id}) {
        router.push(getAdminUrl(`/categories/edit/${id.id}`))
      }
    }
	)

	const { mutate: deleteCategory } = useMutation(
		['delete category'],
		(id: number) => CategoryService.delete(id),
		{
			onSuccess() {
				refetch()
			}
		}
	)

	return {
		deleteCategory,
		createCategory,
		data,
		isFetching
	}
}
