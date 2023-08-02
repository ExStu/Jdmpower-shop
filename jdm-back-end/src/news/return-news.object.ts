import { Prisma } from '@prisma/client'

export const returnNewsObject: Prisma.NewsSelect = {
  id: true,
  createdAt: true,
  image: true,
  title: true,
  description: true,
  slug: true,
}

