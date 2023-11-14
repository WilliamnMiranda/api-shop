import { CreateUserDto } from "src/user/dto/create-user.dto";
import userRepository from "./userRepository";

export class userRepositoryImpl implements userRepository {
    create(user: CreateUserDto): void {
        throw new Error("Method not implemented.");
    }
    findByEmail(email: string): void {
        throw new Error("Method not implemented.");
    }
}