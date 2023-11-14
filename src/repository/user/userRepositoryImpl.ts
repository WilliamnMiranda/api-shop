import { CreateUserDto } from "src/user/dto/create-user.dto";
import userRepository from "./userRepository";
import { PrismaClient } from "@prisma/client";

export class userRepositoryImpl implements userRepository {

    constructor(repositoy : PrismaClient){}
    create(user: CreateUserDto): void {
    }
    findByEmail(email: string): void {
        throw new Error("Method not implemented.");
    }
}