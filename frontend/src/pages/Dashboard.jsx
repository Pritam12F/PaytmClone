import { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance.";
import { Users } from "../components/User";

export const Dashboard = () => {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  const [balance, setBalance] = useState();
  const [firstL, setFirstL] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((res) => {
        setUsers(res.data.user);
      });
  }, [filter]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/api/v1/user/getinfo", {
        token,
      })
      .then((res) => {
        setFirstL(res.data.firstLetter);
        setBalance(res.data.balance);
        setIsLogged(true);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <div>
      <Appbar firstL={firstL} />
      <hr></hr>
      <Balance bal={balance} />
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
