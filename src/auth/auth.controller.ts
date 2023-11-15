import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authUserDTO } from 'src/user/dto/auth-user-dto';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() userAuth: authUserDTO) {
        return this.authService.login(userAuth);
    }
}
