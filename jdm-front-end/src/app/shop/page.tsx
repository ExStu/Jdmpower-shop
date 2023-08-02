import { ProductService } from '@/services/product/product.service'
import ShopExplorer from './ShopExplorer'
import { TypeParamsFilters, TypeProductDataFilters } from '@/services/product/product.types'

export const revalidate = 60

async function getProducts(searchParams: TypeProductDataFilters) {
  const data = await ProductService.getAll(searchParams)

  return data
}

export default async function ShopPage({
  searchParams
}: TypeParamsFilters) {
  const data = await getProducts(searchParams)

  return (
    <ShopExplorer initialProducts={data}/>
  )
}