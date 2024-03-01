import { atom } from "recoil";
export const slctdFriend = atom({
  key: "selectedFriend",
  default: "none" as string,
});
