import { DadosDiarioService } from './dados.diario.service';
import { CreateDadoDiarioDTO } from './dto/create.dados.diario.dto';
export declare class DadosDiarioController {
    private readonly dadosdiarioService;
    constructor(dadosdiarioService: DadosDiarioService);
    insert(createDadoDiarioDTO: CreateDadoDiarioDTO): Promise<{
        codigo: number;
        agua_consumida: number;
        peso_atual: number;
        codigo_usuario: number;
        data_atual: Date;
    }>;
    findOneCodigo(id: string): Promise<import(".prisma/client").Prisma.DadosDiarioWhereUniqueInput>;
    showall(): Promise<{
        codigo: number;
        agua_consumida: number;
        peso_atual: number;
        codigo_usuario: number;
        data_atual: Date;
    }[]>;
}
