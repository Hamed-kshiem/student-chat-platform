import { UserService } from './user.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Unprotected } from 'nest-keycloak-connect';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Unprotected()
  @Post('createUserIfNotExisits')
  createUserIfNotExisits(@Body() createUserDto: CreateUserDto) {
    return this.UserService.createUserIfNotExisits(createUserDto);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.UserService.createUser(createUserDto);
  }

  @Get(':id/channels')
  getUserChannels(@Param('id') id: string) {
    return this.UserService.getUserChannels(id);
  }
  @Get(':id/status')
  getUserStatus(@Param('id') id: string) {
    return this.UserService.getUserStatus(id);
  }
  @Put()
  updateUserStatus(@Param('id') id: string, @Param('status') status: boolean) {
    return this.UserService.updateUserStatus(id, status);
  }
  @Get(':username')
  getUserByUsername(@Param('username') username: string) {
    return this.UserService.getUserByUsername(username);
  }
  @Get()
  findAll() {
    return this.UserService.findAll();
  }
}
