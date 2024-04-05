import { atom } from "recoil";
import { FriendChat } from "../Interfaces/friendChat";
export const slctdFriendChat = atom<any>({
  key: "selectedFriendChat",
  default: undefined,
  dangerouslyAllowMutability: true,
});
