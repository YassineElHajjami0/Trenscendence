import { atom } from "recoil";
import { FriendData } from "../Interfaces/friendDataInterface";
export const currentFriend = atom<FriendData | undefined>({
  key: "currentFriend",
  default: undefined,
  //   dangerouslyAllowMutability: true,
});
