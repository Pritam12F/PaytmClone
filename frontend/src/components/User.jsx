import { ProfilePicture } from "./ProfilePicture";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { sendingUserState } from "../atoms/atoms";
import { useSetRecoilState } from "recoil";

export const Users = ({ user }) => {
  const setSendingState = useSetRecoilState(sendingUserState);
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center mx-2 my-2 shadow-md px-2 rounded-lg">
      <div className="flex justify-between ml-5 items-center">
        <ProfilePicture firstletter={user.firstName[0].toUpperCase()} />
        <div className="mx-5 font-semibold text-xl">
          {user.firstName + " " + user.lastName}
        </div>
      </div>
      <Button
        name="Send Money"
        onClick={() => {
          navigate("/send");
          setSendingState(user.firstName);
        }}
      />
    </div>
  );
};
