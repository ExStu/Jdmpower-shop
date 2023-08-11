import { faker } from '@faker-js/faker'
import { News, PrismaClient, Product } from '@prisma/client'
import * as dotenv from 'dotenv'
// import { generateSlug } from 'src/utils/generate-slug'
// import { getRandomNumber } from 'src/utils/random-number'

dotenv.config()

const prisma = new PrismaClient()

const createProducts = async (quantity: number) => {
  const products: Product[] = []
  // const news: News[] = []

  // for (let i = 0; i < quantity; i++) {
  //   const newsName = faker.commerce.productName()

  //   const newsPost = await prisma.news.create({
  //     data: {
  //       image: faker.image.imageUrl(500, 500, 'cat', true),
  //       title: newsName,
  //       description: faker.commerce.productDescription(),
  //       slug: faker.helpers.slugify(newsName).toLowerCase()
  //     }
  //   })

  //   news.push(newsPost)
  // }

  for (let i = 0; i < quantity; i++) {
    const productName = faker.commerce.productName()
    const categoryName = faker.commerce.department()
    const manufactureName = faker.vehicle.manufacturer()
    // const brandName = faker.commerce.productMaterial()

    const product = await prisma.product.create({
      data: {
        name: productName,
        slug: faker.helpers.slugify(productName).toLowerCase(),
        sku: faker.vehicle.vrm(),
        description: faker.commerce.productDescription(),
        price: +faker.commerce.price(10, 999, 0),
        images: Array.from({length: faker.datatype.number({min: 2, max: 6})}).map(() => faker.image.imageUrl(500, 500, 'cat', true)),
        category: {
          create: {
            name: categoryName,
            slug: faker.helpers.slugify(categoryName).toLowerCase()
          }
        },
        manufacture: {
          create: {
            name: manufactureName,
            slug: faker.helpers.slugify(manufactureName).toLowerCase()
          }
        },
        reviews: {
          create: [
            {
              rating: faker.datatype.number({ min: 1, max: 5}),
              text: faker.lorem.paragraph(),
              user: {
                connect: {
                  id: 1
                }
              }
            },
            {
              rating: faker.datatype.number({ min: 1, max: 5}),
              text: faker.lorem.paragraph(),
              user: {
                connect: {
                  id: 1
                }
              }
            }
          ]
        }
      }
    })

    products.push(product)
  }

  console.log(`Created ${products.length} products`);
}

async function main() {
  console.log('Started seeding...');
  await createProducts(10)
}

main()
	.catch(e => console.error(e))
	.finally(async () => {
		await prisma.$disconnect()
	})