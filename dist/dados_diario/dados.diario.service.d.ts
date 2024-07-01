import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateDadoDiarioDTO } from './dto/create.dados.diario.dto';
export declare class DadosDiarioService {
    private readonly databaseservice;
    constructor(databaseservice: DatabaseService);
    insert(createDadoDiarioDto: CreateDadoDiarioDTO): Promise<{
        codigo: number;
        agua_consumida: number;
        peso_atual: number;
        codigo_usuario: number;
        data_atual: Date;
    }>;
    findOneCode(id: number): Promise<Prisma.DadosDiarioWhereUniqueInput | undefined>;
    findOneData(data_atual: Date): Promise<Prisma.DadosDiarioWhereUniqueInput | undefined>;
    showall(): Promise<{
        codigo: number;
        agua_consumida: number;
        peso_atual: number;
        codigo_usuario: number;
        data_atual: Date;
    }[]>;
}
