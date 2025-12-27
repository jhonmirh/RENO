import { PartialType } from '@nestjs/mapped-types';
import { CreateDefinitivaDto } from './create-definitiva.dto';

export class UpdateDefinitivaDto extends PartialType(
  CreateDefinitivaDto,
) {}
