import { Controller, Get, Post, Patch, Body, Param, ValidationPipe } from '@nestjs/common';
import { DadosDiarioService } from './dados.diario.service';
import { CreateDadoDiarioDTO } from './dto/create.dados.diario.dto';
import { UpdateDadoDiarioDto } from './dto/update.dados.diario.dto'; // Certifique-se de que este DTO existe

@Controller('dados_diario')
export class DadosDiarioController {
  constructor(
    private readonly dadosdiarioService: DadosDiarioService,
  ) {}

  @Post()
  async insert(@Body(ValidationPipe) createDadoDiarioDTO: CreateDadoDiarioDTO) {
    if (!createDadoDiarioDTO.data_atual) {
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);
      createDadoDiarioDTO.data_atual = hoje;
    }
    return this.dadosdiarioService.insert(createDadoDiarioDTO);
  }

  @Get(':email')
  async findOneByEmailAndDate(@Param('email') email: string) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    return this.dadosdiarioService.findOneByEmailAndDate(email, hoje);
  }

  @Patch(':email')
  async updateByEmail(
    @Param('email') email: string,
    @Body(ValidationPipe) updateDadoDiarioDto: UpdateDadoDiarioDto
  ) {
    return this.dadosdiarioService.updateByEmail(email, updateDadoDiarioDto);
  }

  @Get()
  async showall() {
    return this.dadosdiarioService.showall();
  }
}
