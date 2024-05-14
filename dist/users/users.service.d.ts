import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDTO } from './dto/create.users.dto';
import { UpdateUserDto } from './dto/update.users.dto';
export declare class UsersService {
    private readonly databaseservice;
    constructor(databaseservice: DatabaseService);
    create(createUserDto: CreateUserDTO): Promise<any>;
    findOneCode(id: number): Promise<Prisma.UsersWhereUniqueInput | undefined>;
    findOneEmail(email: string): Promise<Prisma.UsersWhereUniqueInput | undefined>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<any>;
    remove(id: number): Promise<any>;
}
