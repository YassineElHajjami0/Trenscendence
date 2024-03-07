export type FriendChat = {
  uid: string;
  allmessages: {
    date: number;
    messages: {
      time: number;
      msg: string;
      recipient: boolean;
    }[];
  }[];
};
export type FriendChatMSG = {
  date: number;
  messages: {
    time: number;
    msg: string;
    recipient: boolean;
  }[];
};
export type ChatMSG = {
  time: number;
  msg: string;
  recipient: boolean;
};
