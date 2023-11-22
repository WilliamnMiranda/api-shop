import { UpdateCartDto } from "src/cart/dto/update-cart.dto";

export default abstract class UserRepository {
    getAll(id: string) { }
    add(updateCartDto: UpdateCartDto) { }
}