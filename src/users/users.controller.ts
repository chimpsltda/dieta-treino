import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create.users.dto';
import { UpdateUserDto } from './dto/update.users.dto';
import jose from "jose";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body(ValidationPipe) createUserDto: CreateUserDTO) {
    const user = await this.usersService.create(createUserDto);
    const jwe = await new jose.GeneralEncrypt(
      new TextEncoder().encode(JSON.stringify(user)),
    )
    return {"token": jwe};
  }

  @Get(':id')
  findOneCodigo(@Param('id') id: string) {
    return this.usersService.findOneCode(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
