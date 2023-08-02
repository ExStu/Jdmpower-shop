import { ProductService } from '@/services/product/product.service'
import Home from './Home'

export const revalidate = 60

// async function getProducts() {
//   const data = await ProductService.getAll({
//     page: 1,
//     perPage: 8,
//     ratings: ''
//   })

//   return data
// }

export default async function HomePage() {

  // const data = await getProducts()

  return (
    <Home />
  )
}
