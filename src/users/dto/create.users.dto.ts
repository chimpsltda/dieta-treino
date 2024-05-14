import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDTO{
  @ApiProperty()
  codigo?: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nome: string;
  @ApiProperty()
  @IsEmail()
  @IsString()
  email: string;
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  senha: string;

  token: string;
}