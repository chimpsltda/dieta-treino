import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient, DadosDiario } from '@prisma/client';
import { CreateDadoDiarioDTO } from './dto/create.dados.diario.dto';
import { UpdateDadoDiarioDto } from './dto/update.dados.diario.dto';

@Injectable()
export class DadosDiarioService implements OnModuleDestroy {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }

  async insert(createDadoDiarioDto: CreateDadoDiarioDTO): Promise<DadosDiario> {
    const data = new Date(createDadoDiarioDto.data_atual || new Date());
    data.setHours(0, 0, 0, 0);
    createDadoDiarioDto.data_atual = data;

    const existingData = await this.findOneByEmailAndDate(createDadoDiarioDto.email, createDadoDiarioDto.data_atual);

    if (existingData) {
      return this.prisma.dadosDiario.update({
        where: { codigo: existingData.codigo },
        data: createDadoDiarioDto,
      });
    } else {
      return this.prisma.dadosDiario.create({
        data: createDadoDiarioDto,
      });
    }
  }

  async findOneByEmailAndDate(email: string, data_atual: Date): Promise<DadosDiario | null> {
    return this.prisma.dadosDiario.findFirst({
      where: {
        email: email,
        data_atual: data_atual,
      },
    });
  }

  async updateByEmail(email: string, updateDadoDiarioDto: UpdateDadoDiarioDto): Promise<DadosDiario> {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const dadosDiario = await this.findOneByEmailAndDate(email, hoje);

    if (!dadosDiario) {
      throw new Error('Dados diarios não encontrados para este email.');
    }

    return this.prisma.dadosDiario.update({
      where: { codigo: dadosDiario.codigo },
      data: updateDadoDiarioDto,
    });
  }

  async update(codigo: number, updateDadoDiarioDto: UpdateDadoDiarioDto): Promise<DadosDiario> {
    return this.prisma.dadosDiario.update({
      where: {
        codigo: codigo,
      },
      data: updateDadoDiarioDto,
    });
  }

  async showall(): Promise<DadosDiario[]> {
    return this.prisma.dadosDiario.findMany();
  }
}
