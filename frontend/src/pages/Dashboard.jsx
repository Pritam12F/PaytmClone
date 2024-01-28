import { Heading } from "../components/Heading";
import { ProfilePicture } from "../components/ProfilePicture";

export const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center pb-2">
        <Heading name="Payments App" />
        <div className="mr-5 flex items-center">
          <div className="mx-4 font-semibold text-xl">Hello, User</div>
          <ProfilePicture firstletter="X" />
        </div>
      </div>
      <hr></hr>
      <div className="flex mt-8">
        <div className="font-bold text-2xl ml-4 mr-2">Your Balance</div>
        <div className="font-bold text-2xl mx-5">$5000</div>
      </div>
      <div className="mt-5">
        <Heading name="Users"></Heading>
        <div className="text-center mt-6">
          <input
            type="text"
            placeholder="Search users..."
            className="border-2 border-slate-400 p-2 w-11/12 rounded-lg ml-3"
          ></input>
        </div>
      </div>
      <div></div>
    </div>
  );
};
