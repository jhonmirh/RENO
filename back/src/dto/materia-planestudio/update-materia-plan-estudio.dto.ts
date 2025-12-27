import { PartialType } from '@nestjs/mapped-types';
import { CreateMateriaPlanEstudioDto } from './create-materia-plan-estudio.dto';

export class UpdateMateriaPlanEstudioDto extends PartialType(
  CreateMateriaPlanEstudioDto,
) {}
