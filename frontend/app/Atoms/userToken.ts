import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import Cookies from "js-cookie";

const { persistAtom } = recoilPersist({
  key: "userData",
  storage: {
    getItem: (key:any) => Cookies.get(key),
    setItem: (key:any, value:any) => Cookies.set(key, value, { expires: 7, path: "/" }),
  },
});

export const userToken = atom<string>({
  key: "userToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
