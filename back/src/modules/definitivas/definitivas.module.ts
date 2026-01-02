import { Module } from '@nestjs/common';
import { DefinitivasController } from './definitivas.controller';
import { DefinitivasService } from './definitivas.service';

@Module({
  controllers: [DefinitivasController],
  providers: [DefinitivasService]
})
export class DefinitivasModule {}
