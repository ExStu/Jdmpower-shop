import { useQuery } from '@tanstack/react-query'

import { ManufactureService } from '@/services/manufacture.service'

export const useManufactures = () => {
	const { data, isLoading } = useQuery(
		['get manufactures'],
		() => ManufactureService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	return { data, isLoading }
}
