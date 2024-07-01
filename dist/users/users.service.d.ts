import { Users } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDTO } from './dto/create.users.dto';
import { UpdateUserDto } from './dto/update.users.dto';
export declare class UsersService {
    private readonly databaseservice;
    constructor(databaseservice: DatabaseService);
    create(createUserDto: CreateUserDTO): Promise<Users>;
    findAll(): Promise<Users[]>;
    findOneCode(id: number): Promise<Users | null>;
    findOneEmail(email: string): Promise<Users | null>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<Users>;
    remove(id: number): Promise<Users>;
}
