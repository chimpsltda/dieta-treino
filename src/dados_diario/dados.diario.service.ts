import { Injectable } from '@nestjs/common';
import { Prisma, DadosDiario } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateDadoDiarioDTO } from './dto/create.dados.diario.dto';
import { UpdateDadoDiarioDto } from './dto/update.dados.diairo.dto';

@Injectable()
export class DadosDiarioService {
  constructor(private readonly databaseservice: DatabaseService) {}

  async insert(createDadoDiarioDto: CreateDadoDiarioDTO): Promise<DadosDiario> {
    const data = new Date(createDadoDiarioDto.data_atual || new Date());
    data.setHours(0, 0, 0, 0);
    createDadoDiarioDto.data_atual = data;

    const dadosexistente = await this.findOneByUsuarioAndDate(createDadoDiarioDto.codigo_usuario, createDadoDiarioDto.data_atual);

    if (dadosexistente) {
      return this.databaseservice.dadosDiario.update({
        where: { codigo: dadosexistente.codigo },
        data: createDadoDiarioDto,
      });
    } else {
      return this.databaseservice.dadosDiario.create({
        data: createDadoDiarioDto,
      });
    }
  }

  async findOneByUsuarioAndDate(codigo_usuario: number, data_atual: Date): Promise<DadosDiario | null> {
    return this.databaseservice.dadosDiario.findFirst({
      where: {
        codigo_usuario: codigo_usuario,
        data_atual: data_atual,
      },
    });
  }

  async findOneData(data_atual: Date): Promise<DadosDiario | null> {
    const data = new Date(data_atual);
    data.setHours(0, 0, 0, 0);
    return this.databaseservice.dadosDiario.findFirst({
      where: {
        data_atual: data,
      },
    });
  }

  async showall(): Promise<DadosDiario[]> {
    return this.databaseservice.dadosDiario.findMany();
  }
}
