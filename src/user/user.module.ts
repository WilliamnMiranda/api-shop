import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userRepositoryImpl } from 'src/repository/user/userRepositoryImpl';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { PrismaClient } from '@prisma/client';



@Module({
  imports: [
    PrismaClient,
  ],
  controllers: [UserController],
  providers: [UserService, PrismaService, userRepositoryImpl, AuthService],
  exports: [userRepositoryImpl],
})
export class UserModule { }
