import { PartialType } from '@nestjs/mapped-types';
import { CreateEscolaridadMateriaDto } from './create-escolaridad-materia.dto';

export class UpdateEscolaridadMateriaDto extends PartialType(
  CreateEscolaridadMateriaDto,
) {}
