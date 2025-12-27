import { IsNotEmpty, IsString, IsNumber, Min, Max } from 'class-validator';

export class CreatePlanEstudioDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  nivel: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(6)
  cantidadGrados: number; // 5 o 6
}
