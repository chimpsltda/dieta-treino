import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create.users.dto';
import { UpdateUserDto } from './dto/update.users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDTO): Promise<any>;
    findOneCodigo(id: string): Promise<any>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<any>;
    remove(id: string): Promise<any>;
}
