import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { generateSlug } from 'src/utils/generate-slug'
import { returnNewsObject } from './return-news.object'
import { NewsDto } from './news.dto'

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService) {}

  async byId(id: number) {
    const news = await this.prisma.news.findUnique({
      where: {
        id
      },
      select: returnNewsObject
    })

    if (!news) {
			throw new Error('This post not found')
		}

		return news
  }

  async bySlug(slug: string) {
    const news = await this.prisma.news.findUnique({
      where: {
        slug
      },
      select: returnNewsObject
    })

    if (!news) {
			throw new NotFoundException('This post not found')
		}

		return news
  }

  async getAll() {
    return this.prisma.news.findMany({
      select: returnNewsObject
    })
  }

  async create() {
    return this.prisma.news.create({
      data: {
        image: '',
        title: '',
        description: '',
        slug: ''
      }
    })
  }

  async update(id: number, dto: NewsDto) {
    return this.prisma.news.update({
			where: {
				id
			},
			data: {
				title: dto.title,
        slug: generateSlug(dto.title)
			}
		})
  }

  async delete(id: number) {
  
    return this.prisma.news.delete({
			where: {
				id
			},
		})
  }
}
