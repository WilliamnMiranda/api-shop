import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { userRepositoryImpl } from 'src/repository/user/userRepositoryImpl';
import { authUserDTO } from 'src/user/dto/auth-user-dto';

@Injectable()
export class AuthService {
    constructor(private userService: userRepositoryImpl, private jwtService: JwtService) { }

    async login(userAuth: authUserDTO) {
        try {
            const user = await this.userService.findByEmail(userAuth.email);
            if (!user) {
                throw new NotFoundException('Usuário não encontrado');
            }

            const isPasswordValid = await bcrypt.compare(userAuth.password, user.password);
            console.log(user)
            if (isPasswordValid) {
                const { email, name, id, phone, cpf, Cart } = user;
                const token = await this.jwtService.signAsync({ email, id });
                return { email, name, id, phone, cpf, token, Cart };
            } else {
                throw new UnauthorizedException('Credenciais inválidas');
            }
        } catch (error) {
            throw new UnauthorizedException('Credenciais inválidas');
        }
    }
}
