import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create.users.dto';
import { UpdateUserDto } from './dto/update.users.dto';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
export declare class UsersController {
    private readonly usersService;
    private readonly authService;
    private readonly jwtService;
    constructor(usersService: UsersService, authService: AuthService, jwtService: JwtService);
    create(createUserDto: CreateUserDTO): Promise<{
        encryptedUser: string;
    }>;
    findOneCodigo(token: string): Promise<import(".prisma/client").Prisma.UsersWhereUniqueInput>;
    update(token: string, updateUserDto: UpdateUserDto): Promise<{
        codigo: number;
        nome: string;
        email: string;
        senha: string;
        datahora_criado: Date;
        datahora_atualizado: Date;
    }>;
    remove(token: string): Promise<{
        codigo: number;
        nome: string;
        email: string;
        senha: string;
        datahora_criado: Date;
        datahora_atualizado: Date;
    }>;
}
