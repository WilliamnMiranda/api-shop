import { CreateUserDto } from "src/user/dto/create-user.dto";
import userRepository from "./userRepository";
import { PrismaService } from "src/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class userRepositoryImpl implements userRepository {

    constructor(private prisma: PrismaService) { }

    create(user: CreateUserDto) {
        return this.prisma.user.create({
            data: {
                email: user.email,
                cpf: user.cpf,
                name: user.name,
                phone: user.phone,
                password: user.password
            }
        })
    }
    
    findByEmail(email: string): Promise<any> {
        return this.prisma.user.findUnique({
            where: { email },
        })
    }

}