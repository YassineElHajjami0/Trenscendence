import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: localStorage,
});
export const channelId = atom<number>({
  key: "channelId",
  default: -1,
  effects_UNSTABLE: [persistAtom],
});
