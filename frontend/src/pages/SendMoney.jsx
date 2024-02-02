import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import {
  accountState,
  sendingUserState,
  userState,
  recievingUserState,
} from "../atoms/atoms";
import { useRecoilValue } from "recoil";
import axios from "axios";

export const SendMoney = () => {
  const friendName = useRecoilValue(sendingUserState);
  const ownName = useRecoilValue(userState)._id;
  const acntState = useRecoilValue(accountState);
  const recv = useRecoilValue(recievingUserState);
  return (
    <div className="border-2 mt-10 w-1/5 px-4 py-8 text-center mx-auto rounded-lg shadow-lg">
      <div>
        <Heading name="Send Money" />
      </div>
      <div className="flex my-10 justify-center">
        <span className="h-10 w-10 rounded-full bg-green-400 flex justify-center items-center font-semibold text-lg mx-4">
          A
        </span>
        <span className="font-bold text-3xl">{friendName}</span>
      </div>
      <div className="text-md font-semibold my-5">Amount (in Rs.)</div>
      <InputBox type="text" placeh="Enter amount" />
      <button
        className="bg-green-500 py-2 px-20 rounded-lg text-white my-5"
        onClick={() => {
          console.log(ownName);
          console.log(recv);
        }}
      >
        Initiate Transfer
      </button>
    </div>
  );
};
