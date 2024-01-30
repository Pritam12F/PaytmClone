import { atom } from "recoil";

export const loggedInState = atom({
  key: "loggedin",
  default: false,
});

export const tokenState = atom({
  key: "token",
  default: "",
});

export const userState = atom({
  key: "user",
  default: {},
});

export const accountState = atom({
  key: "account",
  default: {},
});

export const sendingUserState = atom({
  key: "sending",
  default: "",
});
