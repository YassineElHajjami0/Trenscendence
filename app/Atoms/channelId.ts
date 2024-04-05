import { atom } from "recoil";
export const channelId = atom<number>({
  key: "channelId",
  default: Number(localStorage.getItem("channelId")) || -1,  
});