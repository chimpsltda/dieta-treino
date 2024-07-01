import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateDadoDiarioDTO } from './dto/create.dados.diario.dto';
import { UpdateDadoDiarioDto } from './dto/update.dados.diairo.dto';

@Injectable()
export class DadosDiarioService {
  constructor(private readonly databaseservice: DatabaseService) {}

  async insert(createDadoDiarioDto: CreateDadoDiarioDTO) {
    const data = new Date(createDadoDiarioDto.data_atual);
    data.setHours(0, 0, 0, 0);
    createDadoDiarioDto.data_atual = data;
    const dadosexistente =  await this.findOneData(createDadoDiarioDto.data_atual)
    console.log(dadosexistente)
    if (dadosexistente){
      return this.databaseservice.dadosDiario.update({
        where: {
          codigo: (await dadosexistente).codigo,
        },
        data: createDadoDiarioDto
      });
    } else {
      return this.databaseservice.dadosDiario.create({
        data: createDadoDiarioDto});
    }
  }

  async findOneCode(id: number): Promise<Prisma.DadosDiarioWhereUniqueInput | undefined> {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    return this.databaseservice.dadosDiario.findUnique({
      where: {
          codigo_usuario: id,
          data_atual: hoje,
        },
    });
  }
  async findOneData(data_atual: Date): Promise<Prisma.DadosDiarioWhereUniqueInput| undefined> {
    const data = new Date(data_atual);
    data.setHours(0, 0, 0, 0);
    return this.databaseservice.dadosDiario.findUnique({
      where: {
        data_atual: data,
      }
    });
  }

  async showall(){
    return this.databaseservice.dadosDiario.findMany()
  }
}
