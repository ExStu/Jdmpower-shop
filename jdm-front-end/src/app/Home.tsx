// import { TypePaginationProducts } from '@/types/product.interface'
import Brands from '@/ui/brands/Brands'
// import Catalog from '@/ui/catalog/Catalog'
import { FC } from 'react'
import { brandsItems } from './brands.data'
import Container from '@/ui/Container'

const Home: FC = () => {
  // console.log(products);

  return (
    <div className=' bg-bg-color'>
      <Container>
        <div>News here</div>
        <div>Some catalog? New arrivals, featured?</div>
        <Brands items={brandsItems} />
      </Container>
    </div>
    // Carousel + News
    // Our products => New arrivals .then Featured? 
    // Logos
    // Footer
  )
}

export default Home;
