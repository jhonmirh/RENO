// src/notas/guards/docente-materia.guard.ts

import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class DocenteMateriaGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const docenteId = request.user.id; // Docente actual extraído del JWT
    const { idEscolaridadMateria } = request.body;

    // Verificar si el docente tiene permiso para registrar notas para esta materia
    const tieneAcceso = await this.verificarAccesoDocente(docenteId, idEscolaridadMateria);

    if (!tieneAcceso) {
      throw new ForbiddenException('No tiene permiso para registrar notas en esta materia');
    }

    return true;
  }

  async verificarAccesoDocente(docenteId: string, escolaridadMateriaId: string): Promise<boolean> {
    // Aquí consultas en la base de datos si el docente tiene acceso a esta materia
    // Simulación de consulta (esto lo harías con una query real)
    return true; // Esto se reemplaza con la consulta real
  }
}
