import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create.users.dto';
import { UpdateUserDto } from './dto/update.users.dto';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
    private readonly jwtService: JwtService
  ) {}

  @Post()
  async create(@Body(ValidationPipe) createUserDto: CreateUserDTO) {
    const user = await this.usersService.create(createUserDto);
    const encryptedUser = this.authService.simpleEncrypt(JSON.stringify(user));
    return { encryptedUser: encodeURIComponent(encryptedUser) };
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':token')
  async findOneCodigo(@Param('token') token: string) {
    const decryptedData = this.authService.simpleDecrypt(decodeURIComponent(token));
    console.log('Decrypted Data:', decryptedData);  // Adicionar log para verificar a saída
    const payload = this.jwtService.decode(decryptedData);  // Decodificar o token JWT
    if (typeof payload !== 'object' || payload === null) {
      throw new Error('Invalid token payload');
    }
    const userId = payload.sub;  // Use 'sub' se você está buscando o ID do usuário no token JWT
    return this.usersService.findOneCode(userId);
  }

  @Patch(':token')
  async update(@Param('token') token: string, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
    const decryptedData = this.authService.simpleDecrypt(decodeURIComponent(token));
    const payload = this.jwtService.decode(decryptedData);
    if (typeof payload !== 'object' || payload === null) {
      throw new Error('Invalid token payload');
    }
    const userId = payload.sub;
    return this.usersService.update(userId, updateUserDto);
  }

  @Delete(':token')
  async remove(@Param('token') token: string) {
    const decryptedData = this.authService.simpleDecrypt(decodeURIComponent(token));
    const payload = this.jwtService.decode(decryptedData);
    if (typeof payload !== 'object' || payload === null) {
      throw new Error('Invalid token payload');
    }
    const userId = payload.sub;
    return this.usersService.remove(userId);
  }

  @Get()
  async showall(){
    return this.usersService.showall();
  }
}
