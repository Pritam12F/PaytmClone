import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Button = ({ name, to, link, first, last, pass, email }) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-black px-24 py-2 text-white rounded-md mt-5 mb-4"
      onClick={() => {
        axios
          .post(link, {
            username: email,
            password: pass,
            firstName: first,
            lastName: last,
          })
          .then((res) => {
            alert(res.data.message + " You can login now");
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      }}
    >
      {name}
    </button>
  );
};
