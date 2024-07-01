import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DadosDiarioController } from './dados.diario.controller';
import { DadosDiarioService } from './dados.diario.service';

@Module({  
  imports: [DatabaseModule],
  controllers: [DadosDiarioController],
  providers: [DadosDiarioService],
  exports: [DadosDiarioService],
})
export class DadosDiarioModule {}
