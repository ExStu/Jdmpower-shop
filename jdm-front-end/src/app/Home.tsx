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
import CarouselHome from '@/ui/carousel/Carousel'
import Heading from '@/ui/Heading'
import { carouselItems } from '@/ui/carousel/carousel.data'

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
  const slicedNews = news.slice(0,2)

	// const { queryParams, updateQueryParams } = useFilters()

  // const sortedData = updateQueryParams('sort', 'newest')


  const slicedData = data.products.slice(0, 5)

  // console.log(products);

  return (
    <div className=' bg-bg-color'>
      <CarouselHome items={carouselItems}/>
      <Container>
        <Heading className='mb-5'>Latest news</Heading>
        <div className='grid grid-cols-2 pb-5 gap-5'>
          <News news={slicedNews}/>
        </div>
        <Catalog className='grid-cols-5 gap-8' title='New arrivals' products={slicedData} />
      </Container>
      <div className='py-10'>
        <Brands items={brandsItems} />
      </div>
    </div>
    // Carousel + News
    // Our products => New arrivals .then Featured? 
  )
}

export default Home;
