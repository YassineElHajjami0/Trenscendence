import { atom } from "recoil";

export const chatMSG = atom<any>({
  key: "chatMSG",
  default: [],
});
