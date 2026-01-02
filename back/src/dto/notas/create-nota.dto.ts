import { IsUUID, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateNotaDto {

  @IsUUID()
  idMateria: string;

  @IsUUID()
  idEscolaridad: string;

  @IsUUID()
  idMomento: string;

  @IsNumber()
  numeroForma: number;

  @IsNumber()
  nota: number;
}
