import { IsString } from 'class-validator'

export class ManufactureDto {
	@IsString()
	name: string
}
