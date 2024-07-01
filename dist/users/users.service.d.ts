import { Users } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDTO } from './dto/create.users.dto';
import { UpdateUserDto } from './dto/update.users.dto';
export declare class UsersService {
    private readonly databaseservice;
    constructor(databaseservice: DatabaseService);
<<<<<<< Updated upstream
    create(createUserDto: CreateUserDTO): Promise<Users>;
    findAll(): Promise<Users[]>;
    findOneCode(id: number): Promise<Users | null>;
    findOneEmail(email: string): Promise<Users | null>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<Users>;
    remove(id: number): Promise<Users>;
=======
    create(createUserDto: CreateUserDTO): Promise<{
        codigo: number;
        nome: string;
        email: string;
        senha: string;
        datahora_criado: Date;
        datahora_atualizado: Date;
    }>;
    findOneCode(id: number): Promise<Prisma.UsersWhereUniqueInput | undefined>;
    findOneEmail(email: string): Promise<Prisma.UsersWhereUniqueInput | undefined>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        codigo: number;
        nome: string;
        email: string;
        senha: string;
        datahora_criado: Date;
        datahora_atualizado: Date;
    }>;
    remove(id: number): Promise<{
        codigo: number;
        nome: string;
        email: string;
        senha: string;
        datahora_criado: Date;
        datahora_atualizado: Date;
    }>;
    showall(): Promise<{
        codigo: number;
        nome: string;
        email: string;
        senha: string;
        datahora_criado: Date;
        datahora_atualizado: Date;
    }[]>;
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
}
