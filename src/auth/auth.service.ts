import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(body: any) {
    const { password_confirm, ...data } = body;

    if (data.password !== password_confirm) {
      throw new BadRequestException('Passwords do not match');
    }

    const hashed = bcrypt.hashSync(data.password);

    return await this.userService.save({ ...data, password: hashed });
  }

  public async login(email: string, password: string, res: Response) {
    const user = await this.userService.findOne({ email });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new BadRequestException('Invalid credentials');
    }

    const token = await this.jwtService.signAsync({
      id: user.id,
    });

    res.cookie('jwt', token, { httpOnly: true });

    return { message: 'ok' };
  }
}
