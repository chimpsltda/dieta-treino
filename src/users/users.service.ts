import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseservice: DatabaseService) {}

  async create(createUserDto: Prisma.UsersCreateInput) {
    return this.databaseservice.users.create({
      data: createUserDto
    });
  }

  async findOneCode(id: number) {
    return this.databaseservice.users.findUnique({
      where: {
        codigo: id,
      }
    });
  }

  async findOneEmail(email: string){
    return this.databaseservice.users.findUnique({
      where: {
        email: email
      }
    })
  }

  async update(id: number, updateUserDto: Prisma.UsersUpdateInput) {
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
