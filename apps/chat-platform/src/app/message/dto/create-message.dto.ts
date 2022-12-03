export class CreateMessageDto {
  content: string;

  from: string;

  to?: string;

  channelId: string;

  type?: string;
}
