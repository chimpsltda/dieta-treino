import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDTO } from './dto/login.auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: LoginAuthDTO) {
    const result = await this.authService.signIn(signInDto);
    return result; // Retorna diretamente o objeto result contendo o token encriptado
  }
}
