import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('admin/register')
  public async register(@Body() body) {
    return await this.authService.register(body);
  }

  @Post('admin/login')
  @HttpCode(HttpStatus.OK)
  public async login(
    @Body('email') email,
    @Body('password') password,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.login(email, password, res);
  }
}
