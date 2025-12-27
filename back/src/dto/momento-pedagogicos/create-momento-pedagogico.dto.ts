import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateMomentoPedagogicoDto {

  @IsNotEmpty()
  @IsString()
  nombreMomento: string;

  @IsNotEmpty()
  @IsUUID()
  idAnoEscolar: string;
}
