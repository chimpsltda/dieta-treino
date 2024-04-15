import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDTO } from './dto/login.auth.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(loginauth: LoginAuthDTO): Promise<any>;
}
