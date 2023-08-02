import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { NewsService } from './news.service'
import { NewsDto } from './news.dto'

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
	async getAll() {
		return this.newsService.getAll()
	}

  @Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.newsService.bySlug(slug)
	}

  @Get(':id')
  @Auth()
	async getById(@Param('id') id: string) {
		return this.newsService.byId(+id)
	}

  @HttpCode(200)
  @Auth()
  @Post()
  async create() {
    return this.newsService.create()
  }

	@UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Put(':id')
  async update(@Param('id') id: string,
  @Body() dto: NewsDto) {
    return this.newsService.update(+id, dto)
  }

  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.newsService.delete(+id)
  }
}
