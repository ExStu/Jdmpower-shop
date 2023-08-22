import { Prisma } from '@prisma/client'
import { ArrayMinSize, IsNumber, IsOptional, IsString } from 'class-validator'

export class ProductDto implements Prisma.ProductUpdateInput {
	@IsString()
	name: string

	@IsString()
	sku: string

	@IsNumber()
	price: number

	// @IsBoolean()
	// inStock?: boolean

	// @IsNumber()
	// discount?: decimal

	@IsOptional()
	@IsString()
	description: string

	@IsOptional()
	@IsString({ each: true })
	@ArrayMinSize(1)
	images: string[]

	@IsNumber()
	categoryId: number

	@IsNumber()
	manufactureId: number
}
