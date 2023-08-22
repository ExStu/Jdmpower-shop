import Link from 'next/link'

import Heading from '@/ui/Heading'
import Container from '@/ui/Container'

export default function NotFound() {
	return (
		<>
			<Container>
				<Heading>Not Found</Heading>
				<p>Could not find requested resource</p>
				<p>
					View{' '}
					<Link href='/shop?page=1' className='text-primary'>
						Go to shop
					</Link>
				</p>
			</Container>
		</>
	)
}
