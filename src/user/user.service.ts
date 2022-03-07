import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public async save(options) {
    return await this.userRepository.save(options);
  }

  public async findOne(options) {
    return await this.userRepository.findOne(options);
  }
}
