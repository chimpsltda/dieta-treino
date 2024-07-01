import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNotEmpty, IsOptional, IsNumber } from "class-validator";

export class CreateDadoDiarioDTO {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  codigo?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  agua_consumida: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  peso_atual: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  codigo_usuario: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  data_atual?: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  tempo_exercicio: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  calorias_consumidas: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  frequencia_academia: number;
}

