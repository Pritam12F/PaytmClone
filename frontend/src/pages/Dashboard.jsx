import { memo, useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import { ProfilePicture } from "../components/ProfilePicture";
import { Button } from "../components/Button";
import axios from "axios";

export const Dashboard = () => {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((res) => {
        setUsers(res.data.user);
        console.log(users);
      });
  }, [filter]);
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
        <div className="font-bold text-2xl ml-3 mr-2">Your Balance</div>
        <div className="font-bold text-2xl mx-5">$5000</div>
      </div>
      <div className="mt-5">
        <Heading name="Users"></Heading>
        <div className="text-center mt-6">
          <input
            type="text"
            placeholder="Search users..."
            className="border-2 border-slate-400 p-2 w-11/12 rounded-lg ml-3"
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div>
        {users.map((user, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-between items-center mx-2 my-2 shadow-md px-2 rounded-lg"
            >
              <div className="flex justify-between ml-5 items-center">
                <ProfilePicture firstletter={user.firstName[0].toUpperCase()} />
                <div className="mx-5 font-semibold text-xl">
                  {user.firstName + " " + user.lastName}
                </div>
              </div>
              <Button name="Send Money" to="/send" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
