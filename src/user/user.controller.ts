import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async register(@Body() user: UserDto): Promise<User> {
    console.log(user);
    try {
      return await this.userService.createUser(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('/login')
  async login(@Body() user: UserDto): Promise<boolean> {
    return await this.userService.verifyUser(user);
  }
}
