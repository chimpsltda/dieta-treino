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

    const existingData = await this.findOneByEmailAndDate(createDadoDiarioDto.email, createDadoDiarioDto.data_atual);

    if (existingData) {
      return this.databaseservice.dadosDiario.update({
        where: { codigo: existingData.codigo },
        data: createDadoDiarioDto,
      });
    } else {
      return this.databaseservice.dadosDiario.create({
        data: createDadoDiarioDto,
      });
    }
  }

  async findOneByEmailAndDate(email: string, data_atual: Date): Promise<DadosDiario | null> {
    return this.databaseservice.dadosDiario.findFirst({
      where: {
        email: email,
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

  async update(codigo: number, updateDadoDiarioDto: UpdateDadoDiarioDto): Promise<DadosDiario> {
    return this.databaseservice.dadosDiario.update({
      where: { codigo },
      data: updateDadoDiarioDto,
    });
  }

  async updateByEmail(email: string, updateDadoDiarioDto: UpdateDadoDiarioDto): Promise<DadosDiario> {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const dadosDiario = await this.findOneByEmailAndDate(email, hoje);

    if (!dadosDiario) {
      throw new Error('Dados diarios não encontrados para este email.');
    }

    return this.databaseservice.dadosDiario.update({
      where: { codigo: dadosDiario.codigo },
      data: updateDadoDiarioDto,
    });
  }

  async remove(codigo: number): Promise<DadosDiario> {
    return this.databaseservice.dadosDiario.delete({
      where: { codigo },
    });
  }

  async showall(): Promise<DadosDiario[]> {
    return this.databaseservice.dadosDiario.findMany();
  }
}
