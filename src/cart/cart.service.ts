import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { cartRepositoryImpl } from 'src/repository/cart/cartRepositoryImpl';

@Injectable()
export class CartService {

  constructor(private repository: cartRepositoryImpl) { }

  getAll(id: string) {
    return this.repository.getAll(id)
  }

  add(createCartDto: UpdateCartDto) {
    return this.repository.add(createCartDto)
  }

  remove(productId: string) {
    return this.repository.remove(productId)
  }

  update(id: string, quantity: number) {
    return this.repository.update(id, quantity)
  }
}
