import { CreateUserDTO } from 'src/users/dto/create.users.dto';
declare const LoginAuthDTO_base: import("@nestjs/common").Type<Pick<CreateUserDTO, "email" | "senha">>;
export declare class LoginAuthDTO extends LoginAuthDTO_base {
}
export {};
