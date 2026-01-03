import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotasService } from './notas.service';
import { NotasController } from './notas.controller';
import { Nota } from '../../entities/notas.entity';
import { Evaluacion } from '../../entities/evaluaciones.entity';
import { Escolaridad } from '../../entities/escolaridad.entity';
import { MateriaDocente } from '../../entities/materias_docentes.entity';
import { EscolaridadMateria } from '../../entities/materias_escolaridad.entity';  // Importar EscolaridadMateria
import {DocenteMateriaGuard} from "./guards/docente-materia.guard";
@Module({
  imports: [
    TypeOrmModule.forFeature([ 
      Nota, 
      Evaluacion, 
      Escolaridad, 
      MateriaDocente, 
      EscolaridadMateria  // Asegúrate de agregarlo aquí
    ]),
  ],
  providers: [NotasService,DocenteMateriaGuard],
  controllers: [NotasController],
})
export class NotasModule {}
