import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create.users.dto';
import { UpdateUserDto } from './dto/update.users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDTO): Promise<{
        codigo: number;
        nome: string;
        email: string;
        senha: string;
        datahora_criado: Date;
        datahora_atualizado: Date;
    }>;
    findOneCodigo(id: string): Promise<import(".prisma/client").Prisma.UsersWhereUniqueInput>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        codigo: number;
        nome: string;
        email: string;
        senha: string;
        datahora_criado: Date;
        datahora_atualizado: Date;
    }>;
    remove(id: string): Promise<{
        codigo: number;
        nome: string;
        email: string;
        senha: string;
        datahora_criado: Date;
        datahora_atualizado: Date;
    }>;
}
