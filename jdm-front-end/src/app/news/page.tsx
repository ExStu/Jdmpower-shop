
import { NewsService } from '@/services/news.service'
import News from './News'
import Container from '@/ui/Container'

async function getNews () {
  const data = await NewsService.getAll()

  return data
}

export default async function NewsPage() {

  const data = await getNews()
  // console.log(news);
  return (
    <Container>
      <div className='py-10'>
        <h2 className='text-center text-2xl font-semibold mb-5'>News</h2>
        <div className='grid grid-cols-2 gap-5 bg-white p-4'>
          <News news={data}/>
        </div>
      </div>
    </Container>
  )
}