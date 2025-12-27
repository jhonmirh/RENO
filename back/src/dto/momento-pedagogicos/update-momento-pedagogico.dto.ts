import { PartialType } from '@nestjs/mapped-types';
import { CreateMomentoPedagogicoDto } from './create-momento-pedagogico.dto';

export class UpdateMomentoPedagogicoDto extends PartialType(CreateMomentoPedagogicoDto) {}
