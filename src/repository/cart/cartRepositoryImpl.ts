import { CreateUserDto } from "src/user/dto/create-user.dto";

import { PrismaService } from "src/prisma.service";
import { Injectable } from "@nestjs/common";
import cartRepository from "./cartRepository";
import { UpdateCartDto } from "src/cart/dto/update-cart.dto";

@Injectable()
export class cartRepositoryImpl implements cartRepository {

    constructor(private prisma: PrismaService) { }

    add(updateCartDto: UpdateCartDto) {
        return this.prisma.cart.update({
            where: { id: updateCartDto.cartId },
            data: {
                products: {
                    create: {
                        price: updateCartDto.product.price,
                        name: updateCartDto.product.name,
                        discount: updateCartDto.product.discount,
                        value_discount: updateCartDto.product.value_discount,
                        amount: updateCartDto.product.amount,
                        id: updateCartDto.product.id
                    },
                },
            },
        });
    }

    remove(id: string) {
        return this.prisma.productCart.delete({
            where: { id: id }
        });
    }
}