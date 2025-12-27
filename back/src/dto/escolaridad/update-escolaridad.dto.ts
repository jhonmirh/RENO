import { PartialType } from '@nestjs/mapped-types';
import { CreateEscolaridadDto } from './create-escolaridad.dto';

export class UpdateEscolaridadDto extends PartialType(CreateEscolaridadDto) {}
