import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nota } from '../../entities/notas.entity';
import { MateriaDocente } from '../../entities/materias_docentes.entity';
import { NotasService } from './notas.service';
import { NotasController } from './notas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Nota, MateriaDocente])],
  controllers: [NotasController],
  providers: [NotasService],
})
export class NotasModule {}
