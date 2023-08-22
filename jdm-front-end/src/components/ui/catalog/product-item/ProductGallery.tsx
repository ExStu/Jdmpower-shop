import cn from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

interface IProductGallery {
	images: string[]
  alt: string
}

export function ProductGallery({ images, alt }: IProductGallery) {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<div>
      <Image
        src={images[activeIndex]}
        alt={alt}
        width={400}
        height={400}
        className='rounded-md overflow-hidden'
        priority
        draggable={false}
      />
			<div
				className='mt-3'
				style={{ width: '400px', overflowX: 'auto', whiteSpace: 'nowrap' }}
			>
				{images.map((image, index) => (
					<button
						key={index}
						onClick={() => setActiveIndex(index)}
						className={cn(
							'duration-300 hover:shadow-md mr-5 last:mr-0 border-2 border-solid transition-all rounded-md overflow-hidden inline-block',
							{
								' border-primary': index === activeIndex,
								'border-transparent': index !== activeIndex
							}
						)}
					>
						<Image
							draggable={false}
							src={image}
							alt={alt}
							width={100}
							height={100}
							priority
						/>
					</button>
				))}
			</div>
		</div>
	)
}
