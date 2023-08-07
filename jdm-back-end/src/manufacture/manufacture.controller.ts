import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { ManufactureService } from './manufacture.service'
import { ManufactureDto } from './manufacture.dto'

@Controller('manufactures')
export class ManufactureController {
  constructor(private readonly manufactureService: ManufactureService) {}

  @Get()
	async getAll() {
		return this.manufactureService.getAll()
	}

  @Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.manufactureService.bySlug(slug)
	}

  @Get(':id')
  @Auth()
	async getById(@Param('id') id: string) {
		return this.manufactureService.byId(+id)
	}

  @HttpCode(200)
  @Auth()
  @Post()
  async create() {
    return this.manufactureService.create()
  }

	@UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Put(':id')
  async update(@Param('id') id: string,
  @Body() dto: ManufactureDto) {
    return this.manufactureService.update(+id, dto)
  }

  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.manufactureService.delete(+id)
  }

}
