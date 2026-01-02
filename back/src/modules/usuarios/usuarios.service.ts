import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from '../../entities/usuarios.entity';
import { CreateUsuarioDto } from '../../dto/usuarios/create-usuario.dto';
import { UpdateUsuarioDto } from '../../dto/usuarios/update-usuario.dto';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(dto: CreateUsuarioDto, idInstitucion: string) {
    const passwordHash = await bcrypt.hash(dto.password, 10);

    const usuario = this.usuarioRepository.create({
      ...dto,
      password: passwordHash,
      idInstitucion,
    });

    return this.usuarioRepository.save(usuario);
  }

  async findByEmail(email: string) {
    return this.usuarioRepository.findOne({ where: { email } });
  }

  async findAllByInstitucion(idInstitucion: string) {
    return this.usuarioRepository.find({
      where: { idInstitucion },
    });
  }

  async update(id: string, dto: UpdateUsuarioDto) {
    if (dto.password) {
      dto.password = await bcrypt.hash(dto.password, 10);
    }

    await this.usuarioRepository.update(id, dto);
    return this.usuarioRepository.findOne({ where: { idUsuario: id } });
  }

  async deactivate(id: string) {
    return this.usuarioRepository.update(id, { activo: false });
  }
}
