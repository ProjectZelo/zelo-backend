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
    // TODO: Validations
    const user = new UserEntity();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.firstName = createUserDto.firstName;
    user.email = createUserDto.email;

    //address
    user.addressLine1 = createUserDto.address?.addressLine1;
    user.addressLine2 = createUserDto.address?.addressLine2;
    user.city = createUserDto.address?.city;
    user.postalCode = createUserDto.address?.postalCode;
    user.province = createUserDto.address?.province;
    user.country = createUserDto.address?.country;


    this.userRepository.save(user);

  }

  getUser(): void {

    // TODO :  Call sandbox circle to create payment

  }
}
