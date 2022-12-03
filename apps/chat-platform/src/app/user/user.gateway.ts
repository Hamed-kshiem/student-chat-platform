import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayDisconnect,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { forwardRef, Inject } from '@nestjs/common';

@WebSocketGateway()
export class UserGateway implements OnGatewayDisconnect, OnGatewayConnection {
  constructor(
    @Inject(forwardRef(() => UserService)) private userService: UserService
  ) {}
  handleConnection(client: any, ...args: any[]) {
    //console.log(client);
    //console.log(args);
  }
  handleDisconnect(client: any) {
    //TODO remove user to array
  }

  @SubscribeMessage('connectUser')
  create(@MessageBody() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    // return this.userService.create(createUserDto);
  }

  @SubscribeMessage('findAllUser')
  findAll() {
    return this.userService.findAll();
  }

  @SubscribeMessage('findOneUser')
  findOne(@MessageBody() id: number) {
    return this.userService.findOne(id);
  }

  @SubscribeMessage('updateUser')
  update(@MessageBody() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto.id, updateUserDto);
  }

  @SubscribeMessage('removeUser')
  remove(@MessageBody() id: number) {
    return this.userService.remove(id);
  }
}
