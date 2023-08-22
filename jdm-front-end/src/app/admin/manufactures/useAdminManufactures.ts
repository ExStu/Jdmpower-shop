import { useMutation, useQuery } from '@tanstack/react-query'

import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'

import { getAdminUrl } from '@/config/url.config'

import { ManufactureService } from '@/services/manufacture.service'

export const useAdminManufactures = () => {
	const { data, isFetching, refetch } = useQuery(
		['get admin manufactures'],
		() => ManufactureService.getAll(),
		{
			select: ({ data }) =>
				data.map((manufacture): IListItem => {
					return {
						id: manufacture.id,
						viewUrl: `/manufacture/${manufacture.slug}`,
						editUrl: getAdminUrl(`/manufactures/edit/${manufacture.id}`),
						items: [manufacture.name, manufacture.slug]
					}
				})
		}
	)

	const { mutate } = useMutation(
		['delete manufacture'],
		(id: number) => ManufactureService.delete(id),
		{
			onSuccess() {
				refetch()
			}
		}
	)

	return {
		mutate,
		data,
		isFetching
	}
}
