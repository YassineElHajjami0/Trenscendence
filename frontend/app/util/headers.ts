import { useRecoilValue } from "recoil";
import { userToken } from "../Atoms/userToken";
// const userTok = useRecoilValue(userToken);


const mheaders = {
    Authorization: `Bearer ${userToken}`,
    "Content-Type": "application/json",
  }

  export {mheaders}