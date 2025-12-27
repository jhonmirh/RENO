import {
  IsNotEmpty,
  IsUUID,
  IsInt,
  Min,
  Max,
  IsNumber,
} from 'class-validator';

export class CreateNotaDto {

  @IsNotEmpty()
  @IsUUID()
  idEscolaridadMateria: string;

  @IsNotEmpty()
  @IsUUID()
  idMomento: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  numeroForma: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(20)
  nota: number;
}
