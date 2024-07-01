import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { DadosDiarioModule } from './dados_diario/dados.diario.module';

@Module({
  imports: [
    UsersModule, 
    DatabaseModule, 
    AuthModule,
    DadosDiarioModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1 day' },
    }),],
})
export class AppModule {}
