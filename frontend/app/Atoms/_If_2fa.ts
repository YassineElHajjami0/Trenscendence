import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import Cookies from "js-cookie";

const { persistAtom } = recoilPersist({
  key: "userData",
  storage: {
    getItem: (key) => Cookies.get(key),
    setItem: (key, value) => Cookies.set(key, value, { expires: 7, path: "/" }),
  },
});

export const twoFA = atom<boolean>({
  key: "twoFA",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
