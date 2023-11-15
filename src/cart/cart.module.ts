import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { cartRepositoryImpl } from 'src/repository/cart/cartRepositoryImpl';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CartController],
  providers: [CartService, cartRepositoryImpl, PrismaService],
  exports: [],
})
export class CartModule { }
