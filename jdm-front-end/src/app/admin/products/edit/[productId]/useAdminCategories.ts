import { CategoryService } from '@/services/category.service'
import { useQuery } from '@tanstack/react-query'
import { IOption } from '@/ui/admin/admin-select/adminSelect.interface'


export const useAdminCategories = () => {
  const queryData = useQuery(
    ['list of categories'],
    () => CategoryService.getAll(), {
      select: ({data}) => 
        data.map(
          (category): IOption => ({
            label: category.name,
            value: category.id,
          })
        ),
        onError(error) {
          console.log(error, 'category list');
        }
    }
  )

  return queryData
}