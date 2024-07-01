import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDTO } from './dto/login.auth.dto';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(loginAuthDto: LoginAuthDTO): Promise<any> {
    const user = await this.usersService.findOneEmail(loginAuthDto.email);
    if (!user || user.senha !== loginAuthDto.senha) {
      throw new UnauthorizedException();
    }

    const payload = { email: user.email, sub: user.codigo };
    const token = await this.jwtService.signAsync(payload, {
      secret: jwtConstants.secret,
    });

    const encryptedToken = this.simpleEncrypt(token);
    return { access_token: encodeURIComponent(encryptedToken) };
  }

  public simpleEncrypt(text: string): string {
    // Uma função simples de criptografia que desloca cada caractere
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join('');
  }

  public simpleDecrypt(encryptedText: string): string {
    // Uma função simples de descriptografia que desloca cada caractere de volta
    return encryptedText.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join('');
  }
}

