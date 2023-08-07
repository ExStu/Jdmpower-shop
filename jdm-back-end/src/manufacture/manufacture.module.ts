import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'
import { ManufactureController } from './manufacture.controller';
import { ManufactureService } from './manufacture.service';

@Module({
  controllers: [ManufactureController],
  providers: [ManufactureService, PrismaService],
  exports: [ManufactureService]
})
export class ManufactureModule {}
