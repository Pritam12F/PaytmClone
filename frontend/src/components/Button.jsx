import { useNavigate } from "react-router-dom";

export const Button = ({ name, to }) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-black px-24 py-2 text-white rounded-md mt-5 mb-4"
      onClick={() => {
        navigate(to);
      }}
    >
      {name}
    </button>
  );
};
