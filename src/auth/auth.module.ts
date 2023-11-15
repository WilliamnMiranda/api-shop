import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { PrismaService } from 'src/prisma.service';
import { userRepositoryImpl } from 'src/repository/user/userRepositoryImpl';
import { UserModule } from 'src/user/user.module';


@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret, // Use a variável jwtConstants.secret diretamente
      signOptions: { expiresIn: '60000s' },
    }),
  ],
  providers: [AuthService, userRepositoryImpl, PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },],
  controllers: [AuthController],
})
export class AuthModule { }

