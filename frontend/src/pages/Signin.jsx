import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-1/4 items-center shadow-lg px-10 py-4 rounded-2xl mx-auto my-20">
      <Heading name="Sign In" />
      <SubHeading name="Enter your credentials to access your account" />
      <InputBox name="Email" placeh="Enter your email" type="text"></InputBox>
      <InputBox
        name="Password"
        placeh="Enter your password"
        type="password"
      ></InputBox>
      <Button name="Sign In" />
      <ButtonWarning
        name="Don't have an account yet ?"
        warning="Sign Up"
        navigate={navigate}
        to="/signup"
      />
    </div>
  );
};
