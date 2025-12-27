import { PartialType } from '@nestjs/mapped-types';
import { CreateMateriaDocenteDto } from './create-materia-docente.dto';

export class UpdateMateriaDocenteDto extends PartialType(CreateMateriaDocenteDto) {}
