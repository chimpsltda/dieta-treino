import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDTO } from './dto/login.auth.dto';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService) {}

  async signIn(loginauth: LoginAuthDTO): Promise<any> {
    const user = await this.usersService.findOneEmail(loginauth['email']);
    if (user?.senha !== loginauth['senha']) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.codigo, username: user.nome };
    return {
      access_token: await this.jwtService.signAsync(payload,{secret: jwtConstants.secret}),
    };
  }
}
