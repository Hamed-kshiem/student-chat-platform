import { ApiProperty } from '@nestjs/swagger';

export class CreateChannelDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  members: string[];

  @ApiProperty()
  messages: string[];
}
