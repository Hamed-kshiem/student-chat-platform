import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty()
  content: string;

  @ApiProperty()
  from: string;

  @ApiProperty()
  to?: string;

  @ApiProperty()
  channelId: string;

  @ApiProperty()
  type?: string;
}
