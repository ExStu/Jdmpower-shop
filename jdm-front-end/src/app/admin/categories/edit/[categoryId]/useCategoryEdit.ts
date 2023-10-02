import { getAdminUrl } from '@/config/url.config'
import { CategoryService } from '@/services/category.service'
import { ICategory } from '@/types/category.interface'
import { IOption } from '@/ui/admin/admin-select/adminSelect.interface'
import { useMutation, useQuery } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'

export const useCategoryEdit = (setValue: UseFormSetValue<ICategory>) => {

	const pathname = usePathname()
  const id = pathname.split('/admin/categories/edit/').join('')
  const router = useRouter()

  const { mutate } = useMutation(
		['update category'],
		(data: ICategory) => CategoryService.update(data.id, data.name),
		{
			onSuccess() {
				router.push(getAdminUrl('/categories'))
        console.log('success');
			},
      onError(error) {
        console.log(error);
      }
		}
	)

	const { isLoading } = useQuery(
		['category', id],
		() => CategoryService.getById(id),
		{
			onSuccess({ data }) {
				// getKeys(data).forEach((key) => {
					setValue(data.name as any, data.id)
				// })
			},
			onError(error) {
        console.log(error);
				// toastError(error, 'Get movie')
        // toast(error, 'get movie')
			},
			enabled: !!id,
		}
	)

	const onSubmit: SubmitHandler<ICategory> = (data) => {
    console.log(data);
    
    mutate(data)
  }

	return {onSubmit, isLoading}

}