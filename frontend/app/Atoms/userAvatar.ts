import { atom } from "recoil";

export const userAvatar = atom<string>({
  key: "userAvatar",
  default: `http://10.13.4.4:3000/default.png`,
});
