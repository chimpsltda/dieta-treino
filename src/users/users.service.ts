import { Injectable } from '@nestjs/common';
import { Prisma, Users } from '@prisma/client';  // Certifique-se de que o tipo 'User' está sendo importado corretamente
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDTO } from './dto/create.users.dto';
import { UpdateUserDto } from './dto/update.users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly databaseservice: DatabaseService) {}

  async create(createUserDto: CreateUserDTO): Promise<Users> {
    return this.databaseservice.users.create({
      data: createUserDto,
    });
  }

  async findAll(): Promise<Users[]> {  // Usando o tipo 'User' importado
    return this.databaseservice.users.findMany();
  }

  async findOneCode(id: number): Promise<Users | null> {  // Usando o tipo 'User' importado
    return this.databaseservice.users.findUnique({
      where: {
        codigo: id,
      },
    });
  }

  async findOneEmail(email: string): Promise<Users | null> {  // Usando o tipo 'User' importado
    return this.databaseservice.users.findUnique({
      where: {
        email: email,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<Users> {  // Usando o tipo 'User' importado
    return this.databaseservice.users.update({
      where: {
        codigo: id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number): Promise<Users> {  // Usando o tipo 'User' importado
    return this.databaseservice.users.delete({
      where: {
        codigo: id,
      },
    });
  }

  async showall(){
    return this.databaseservice.users.findMany()
  }

  async showall(){
    return this.databaseservice.users.findMany()
  }

  async showall(){
    return this.databaseservice.users.findMany()
  }
}
