import { Button } from "../components/Button"
import { ButtonWarning } from "../components/ButtonWarning"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signup = ()=>{
    return <div className="flex flex-col w-1/4 items-center shadow-lg px-10 py-4 rounded-2xl mx-auto my-20">
        <Heading name="Sign Up"/>
        <SubHeading name="Enter your information to create an account"/>
        <div>
            <InputBox name="First name" placeh="Enter your first name" type="text" />
            <InputBox name="Last name" placeh="Enter your last name" type="text" />
            <InputBox name="Email" placeh="Enter your email" type="text" />
            <InputBox name="Password" placeh="Enter your password" type="password" />
        </div>
        <Button name="Sign Up"/>
        <ButtonWarning name="Already have an account?" warning="Login"/>
    </div>
}