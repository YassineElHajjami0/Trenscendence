import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: localStorage,
});

export const userNotifications = atom<any>({
  key: "userNotifications",
  default: [],
  effects_UNSTABLE: [persistAtom],
});