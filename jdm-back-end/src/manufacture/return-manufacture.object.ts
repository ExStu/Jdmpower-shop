import { Prisma } from '@prisma/client'

export const returnManufactureObject: Prisma.ManufactureSelect = {
  id: true,
  name: true,
  slug: true,
}