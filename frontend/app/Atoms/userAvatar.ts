import { atom } from "recoil";

export const userAvatar = atom<string>({
  key: "userAvatar",
  default: `http://localhost:3000/default.png`,
});
