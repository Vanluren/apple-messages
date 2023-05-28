export type RawChat = {
  ROWID: number;
  guid: string;
  text: string;
  chat_identifier: string;
  last_read_message_timestamp: number;
  message_date: number;
};

export type Chat = {
  ROWID: number;
  guid: string;
  text: string;
  chatIdentifier: string;
  lastReadMessageTimestamp: number;
  messageDate: number;
};
