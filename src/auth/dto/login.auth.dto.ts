import { PickType } from '@nestjs/swagger';
import { CreateUserDTO } from 'src/users/dto/create.users.dto';

export class LoginAuthDTO extends PickType(CreateUserDTO, ['email', 'senha'] as const) {}