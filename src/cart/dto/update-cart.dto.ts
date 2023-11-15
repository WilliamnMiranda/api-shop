import { PartialType } from '@nestjs/mapped-types';
import { CreateCartDto } from './create-cart.dto';

interface productCart {
    price: string,
    name: string,
    discount: boolean,
    value_discount: number,
    amount: number,
}
export class UpdateCartDto extends PartialType(CreateCartDto) {
    readonly cartId: string;
    readonly product: productCart;
}
