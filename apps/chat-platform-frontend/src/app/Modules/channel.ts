export type ChannelList = Channel[];

export interface Channel {
  _id: string;
  name: string;
  members: string[];
  messages: string[];
  __v: number;
  lastModified: string;
  lastchange?: string;
}
