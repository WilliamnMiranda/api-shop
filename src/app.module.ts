import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { userRepositoryImpl } from './repository/user/userRepositoryImpl';
@Module({
  imports: [UserModule, AuthModule, JwtModule.register({
    global: true,
    secret: 'jwtConstants.secret',
    signOptions: { expiresIn: '60s' },
  })],
  controllers: [],
  providers: [PrismaService, AuthService, userRepositoryImpl],
})
export class AppModule { }
