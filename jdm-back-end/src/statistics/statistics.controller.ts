import { Controller, Get } from '@nestjs/common'
import { StatisticsService } from './statistics.service'
import { CurrentUser } from 'src/auth/decorators/user.decorator'

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get('main')
	// @Auth('admin')
	getMainStatistics(@CurrentUser('id') id: number) {
		return this.statisticsService.getMain(id)
	}
}
