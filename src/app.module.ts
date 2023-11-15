import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { userRepositoryImpl } from './repository/user/userRepositoryImpl';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
@Module({
  imports: [UserModule, AuthModule, JwtModule.register({
    global: true,
    secret: 'jwtConstants.secret',
    signOptions: { expiresIn: '60s' },
  }), CartModule, ProductModule],
  controllers: [],
  providers: [PrismaService, AuthService, userRepositoryImpl],
})
export class AppModule { }
