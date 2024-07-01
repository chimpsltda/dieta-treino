import { OmitType } from '@nestjs/swagger';
import { CreateDadoDiarioDTO } from './create.dados.diario.dto';


export class UpdateDadoDiarioDto extends OmitType(CreateDadoDiarioDTO, ['codigo']  as const){}