import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDTO } from './dto/create.users.dto';
import { UpdateUserDto } from './dto/update.users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly databaseservice: DatabaseService) {}

  async create(createUserDto: CreateUserDTO) {
    return this.databaseservice.users.create({
      data: createUserDto
    });
  }

  async findOneCode(id: number): Promise<Prisma.UsersWhereUniqueInput| undefined> {
    return this.databaseservice.users.findUnique({
      where: {
        codigo: id,
      }
    });
  }

  async findOneEmail(email: string): Promise<Prisma.UsersWhereUniqueInput| undefined>{
    return this.databaseservice.users.findUnique({
      where: {
        email: email
      }
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.databaseservice.users.update({
      where: {
        codigo: id,
      },
      data: updateUserDto
    });
  }

  async remove(id: number) {
    return this.databaseservice.users.delete({
      where:{
        codigo: id,
      }
    })
  }
}
