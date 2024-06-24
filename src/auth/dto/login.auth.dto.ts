import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class LoginAuthDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  senha: string;
}