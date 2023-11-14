import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userRepositoryImpl } from 'src/repository/user/userRepositoryImpl';
import { PrismaService } from 'src/prisma.service';



@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, userRepositoryImpl],
})
export class UserModule { }
