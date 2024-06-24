import { AuthService } from './auth.service';
import { LoginAuthDTO } from './dto/login.auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: LoginAuthDTO): Promise<any>;
}
