import { atom } from "recoil";
import { FriendChat } from "../Interfaces/friendChat";
export const slctdFriendChat = atom<FriendChat | undefined>({
  key: "selectedFriendChat",
  default: undefined,
  dangerouslyAllowMutability: true,
});
