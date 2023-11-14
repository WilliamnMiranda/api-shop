import { CreateUserDto } from "src/user/dto/create-user.dto";

export default abstract class UserRepository {
    create(user: CreateUserDto) { }
    findByEmail(email: string) { }
}