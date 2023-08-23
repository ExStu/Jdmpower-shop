import {
	Controller,
	HttpCode,
	Post,
	Query,
	UploadedFile,
	UseInterceptors,
  // UsePipes,
  // ValidationPipe
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { Auth } from '../auth/decorators/auth.decorator'
import { FileResponse } from './file.dto'
import { FilesService } from './files.service'

@Controller('files')
export class FilesController {
	constructor(private readonly filesService: FilesService) {}

	// @UsePipes(new ValidationPipe())

	@Post()
	@HttpCode(200)
	@Auth('admin')
	@UseInterceptors(FileInterceptor('image'))
	async uploadFile(
		@UploadedFile() file: Express.Multer.File,
		@Query('folder') folder?: string
	): Promise<FileResponse[]> {
		return this.filesService.saveFiles([file], folder)
	}
}
