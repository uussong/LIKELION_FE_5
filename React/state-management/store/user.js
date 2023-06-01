import { atom } from "recoil";

const userNameState = atom({
  key: 'userNameState',
  default: ''
})

export default userNameState