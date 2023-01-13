export type MessageList = Message[];

export interface Message {
  _id: string;
  content: string;
  channelId: string;
  from: string;
  to: string;
  type: string;
  createdAt: string;
  __v: number;
}
