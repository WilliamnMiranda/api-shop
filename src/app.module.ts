import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
@Module({
  imports: [UserModule],
  controllers: [],
  providers: [PrismaService, AuthService],
})
export class AppModule { }
