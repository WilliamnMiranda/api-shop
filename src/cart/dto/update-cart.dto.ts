import { PartialType } from '@nestjs/mapped-types';
import { CreateCartDto } from './create-cart.dto';

interface productCart {
    price: string,
    name: string,
    discount: boolean,
    value_discount: number,
    amount: number,
    id: string,
}

interface IUpdateAmountProductCart {
    amount: number
}
export class UpdateCartDto extends PartialType(CreateCartDto) {
    readonly cartId: string;
    readonly product: productCart;
}

export class UpdateAmountProductCart {
    readonly amount: number
}
