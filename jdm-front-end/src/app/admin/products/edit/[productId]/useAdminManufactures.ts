import { ManufactureService } from '@/services/manufacture.service'
import { useQuery } from '@tanstack/react-query'
import { IOption } from '@/ui/admin/admin-select/adminSelect.interface'


export const useAdminManufactures = () => {
  const queryData = useQuery(
    ['list of manufactures'],
    () => ManufactureService.getAll(), {
      select: ({data}) => 
        data.map(
          (manufacture): IOption => ({
            label: manufacture.name,
            value: manufacture.id,
          })
        ),
        onError(error) {
          console.log(error, 'manufacture list');
        }
    }
  )

  return queryData
}