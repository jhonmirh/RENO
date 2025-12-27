import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateMateriaDocenteDto {

  @IsNotEmpty()
  @IsUUID()
  idMateria: string;

  @IsNotEmpty()
  @IsUUID()
  idCedulaDocente: string;
}
