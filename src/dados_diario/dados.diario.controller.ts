import { Controller, Get, Post, Body, Param, ValidationPipe } from '@nestjs/common';
import { DadosDiarioService } from './dados.diario.service';
import { CreateDadoDiarioDTO } from './dto/create.dados.diario.dto';

@Controller('dados_diario')
export class DadosDiarioController {
  constructor(
    private readonly dadosdiarioService: DadosDiarioService,
  ) {}

  @Post()
  async insert(@Body(ValidationPipe) createDadoDiarioDTO: CreateDadoDiarioDTO) {
    if (!createDadoDiarioDTO.data_atual){
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);
      createDadoDiarioDTO.data_atual = hoje;
    }
    return this.dadosdiarioService.insert(createDadoDiarioDTO)
  }

  @Get(':id')
  async findOneCodigo(@Param('id') id: string) {
    const userId = parseInt(id, 10); // Converte o id para número
    return this.dadosdiarioService.findOneCode(userId);
  }
  
  @Get()
  async showall(){
    return this.dadosdiarioService.showall();
  }
}
