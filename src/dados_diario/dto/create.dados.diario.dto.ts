import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class CreateDadoDiarioDTO {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  codigo?: number;

  @ApiProperty()
  @IsNotEmpty()
  agua_consumida: number;

  @ApiProperty()
  @IsNotEmpty()
  peso_atual: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  codigo_usuario: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  data_atual?: Date;
}
