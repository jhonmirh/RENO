import { PartialType } from '@nestjs/mapped-types';
import { CreateReferenciaPersonalDto } from './create-referencia-personal.dto';

export class UpdateReferenciaPersonalDto extends PartialType(CreateReferenciaPersonalDto) {}
