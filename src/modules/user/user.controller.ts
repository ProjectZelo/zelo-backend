import { CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {

  }

  @Post('user')
  createUser(@Body('user') createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

}
