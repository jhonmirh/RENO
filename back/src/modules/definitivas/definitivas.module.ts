import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Definitiva } from '../../entities/definitivas.entity';
import { Nota } from '../../entities/notas.entity';
import { EscolaridadMateria } from '../../entities/materias_escolaridad.entity';
import { DefinitivasService } from './definitivas.service';
import { DefinitivasController } from './definitivas.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Definitiva,
      Nota,
      EscolaridadMateria,  // Confirmar que está registrado aquí también
    ]),
  ],
  providers: [DefinitivasService],
  controllers: [DefinitivasController],
})
export class DefinitivasModule {}
