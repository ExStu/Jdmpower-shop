// import { TypePaginationProducts } from '@/types/product.interface'
import Brands from '@/ui/brands/Brands'
// import Catalog from '@/ui/catalog/Catalog'
import { FC } from 'react'
import { brandsItems } from './brands.data'
import Container from '@/ui/Container'
import Catalog from '@/ui/catalog/Catalog'
import { useQuery } from '@tanstack/react-query'
import { useFilters } from './shop/useFilters'
import { ProductService } from '@/services/product/product.service'
import { TypeParamsFilters, TypeProductDataFilters } from '@/services/product/product.types'
import { NewsService } from '@/services/news.service'
import News from './news/News'

export const revalidate = 60

async function getProducts(searchParams: TypeProductDataFilters) {
  const data = await ProductService.getAll(searchParams)

  return data
}

export async function Home({
  searchParams
}: TypeParamsFilters) {

  const data = await getProducts(searchParams)

  const news = await NewsService.getAll()
  const slicedNews = news.slice(0,3)

	// const { queryParams, updateQueryParams } = useFilters()

  // const sortedData = updateQueryParams('sort', 'newest')


  const slicedData = data.products.slice(0, 3)

  // console.log(products);

  return (
    <div className=' bg-bg-color'>
      <Container>
        <div className='grid grid-cols-3'>
          <News news={slicedNews}/>
        </div>
        <Catalog title='New arrivals' products={slicedData} />
        <Brands title='Brands we work with' items={brandsItems} />
      </Container>
    </div>
    // Carousel + News
    // Our products => New arrivals .then Featured? 
  )
}

export default Home;
