import { OmitType } from '@nestjs/swagger';
import { CreateDadoDiarioDTO } from './create.dados.diario.dto';


export class UpdateDadoDiarioDto extends OmitType(CreateDadoDiarioDTO, ['codigo']  as const){}


import { IsNumber, IsOptional } from 'class-validator';

export class UpdateDadoDiarioDto {
  @IsOptional()
  @IsNumber()
  agua_consumida?: number;

  @IsOptional()
  @IsNumber()
  peso_atual?: number;

  @IsOptional()
  @IsNumber()
  tempo_exercicio?: number;

  @IsOptional()
  @IsNumber()
  calorias_consumidas?: number;

  @IsOptional()
  @IsNumber()
  frequencia_academia?: number;
}