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
import {BsArrowUpRight} from 'react-icons/bs'
import Link from 'next/link'

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
      <div className='bg-white'>
        <Container>
          <CarouselHome items={carouselItems}/>
        </Container>
      </div>
        <div className='py-10 bg-white'>
          <Container>
            <div className='flex flex-col'>
              <Heading className='mb-5'>Latest news</Heading>
              <div className='grid grid-cols-2 pb-5 gap-5'>
                <News news={slicedNews}/>
              </div>
              <Link href='/news' className='self-end flex items-center hover:text-primary transition-colors duration-200'>Show all&nbsp;<BsArrowUpRight/></Link>
            </div>
          </Container>
        </div>
      <Container>
        <div className='flex flex-col py-10'>
          <Catalog className='grid-cols-5 gap-8' title='New arrivals' products={slicedData} />
          <Link href='/shop?page=1' className='mt-5 self-end flex items-center hover:text-primary transition-colors duration-200'>Show all&nbsp;<BsArrowUpRight/></Link>
        </div>
      </Container>
      <div className='py-10 bg-white'>
        <Brands items={brandsItems} />
      </div>
    </div>
    // Carousel + News
    // Our products => New arrivals .then Featured? 
  )
}

export default Home;
