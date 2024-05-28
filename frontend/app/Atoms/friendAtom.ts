import { atom } from "recoil";
export const slctdFriend = atom({
  key: "selectedFriend",
  default: Number(localStorage.getItem("selectedFriend")) || -1,
});
