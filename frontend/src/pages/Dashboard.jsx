import { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance.";
import { Users } from "../components/User";

export const Dashboard = () => {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((res) => {
        setUsers(res.data.user);
      });
  }, [filter]);
  return (
    <div>
      <Appbar />
      <hr></hr>
      <Balance />
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
          return <Users user={user} key={idx} />;
        })}
      </div>
    </div>
  );
};
