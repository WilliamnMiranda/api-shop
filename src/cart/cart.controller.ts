import { Controller, Req, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { User } from 'src/interfaces';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) { }

  @Post()
  addProduct(@Body() updateCartDto: UpdateCartDto, cartId: string) {
    return this.cartService.add(updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id') cartId: string, @Req() request: Request & { user: User }) {
    return this.cartService.remove(cartId)
  }
}
