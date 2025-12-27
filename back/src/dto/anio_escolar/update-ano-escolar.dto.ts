import { PartialType } from '@nestjs/mapped-types';
import { CreateAnoEscolarDto } from './create-ano-escolar.dto';

export class UpdateAnoEscolarDto extends PartialType(CreateAnoEscolarDto) {}
