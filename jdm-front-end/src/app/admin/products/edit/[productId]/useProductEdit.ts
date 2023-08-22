import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { IProductEditInput } from './product-edit.interface'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ProductService } from '@/services/product/product.service'
import { getAdminUrl } from '@/config/url.config'
// import { getKeys } from '@/utils/getKeys'
import { toast } from 'react-hot-toast'
import { TypeProductData } from '@/services/product/product.types'

export const useProductEdit = (setValue: UseFormSetValue<IProductEditInput>) => {
  const router = useRouter()
  const query = useSearchParams()
  const pathname = usePathname()
  const id = pathname.split('/admin/products/edit/').join('')
  // console.log(id);

  // const id = String(query.get(''))

  // const productId = String(router.)

  // const { mutateAsync } = useMutation(
  //   'update Product',
  //   (data: IProductEditInput) => ProductService.update(productId, data),
  //   {
  //     onError(error) {
        
  //     },
  //     onSuccess() {
  //       router.push(getAdminUrl('products'))
  //     }
  //   }
  // )
  const getKeys = <T>(obj: Object) => Object.keys(obj) as Array<keyof T>

  const { isLoading } = useQuery(
		['product', id],
		() => ProductService.getById(id),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError(error) {
        console.log(error);
				// toastError(error, 'Get movie')
        // toast(error, 'get movie')
			},
			enabled: !!id,
		}
	)

  const { mutate } = useMutation(
		['update product'],
		(data: IProductEditInput) => ProductService.update(id, data),
		{
			onSuccess() {
				router.push(getAdminUrl('/products'))
        console.log('success');
			},
      onError(error) {
        console.log(error);
      }
		}
	)

  

  const onSubmit: SubmitHandler<IProductEditInput> = (data) => {
    console.log(data);
    // const formatted: IProductEditInput = {
    //   "name": data.name,
    //   "sku": data.sku,
    //   "price": Number(data.price),
    //   "categoryId": Number(data.categoryId),
    //   "manufactureId": Number(data.manufactureId),
    // }

    data.images.push(data.image)
    
    mutate(data)
  }

  return {onSubmit, isLoading}
}