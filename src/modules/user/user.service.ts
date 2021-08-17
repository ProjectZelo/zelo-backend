import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) { }

  createUser(createUserDto: CreateUserDto): void {
    // TODO :  Call sandbox circle to create card for the user
    const user = new UserEntity();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.firstName = createUserDto.firstName

    this.userRepository.save(createUserDto);

  }

  getUser(): void {

    // TODO :  Call sandbox circle to create payment

  }
}
