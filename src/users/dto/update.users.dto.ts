import { OmitType } from '@nestjs/swagger';
import { CreateUserDTO } from './create.users.dto';


export class UpdateUserDto extends OmitType(CreateUserDTO, ['codigo'] as const){}