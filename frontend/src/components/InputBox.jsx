export const InputBox = ({ name, placeh, type }) => {
  return (
    <div className="mt-2">
      <div className="text-md font-semibold mb-3">{name}</div>
      <input
        type={type}
        placeholder={placeh}
        className="border-2 w-64 px-2 py-1 rounded-lg"
      ></input>
    </div>
  );
};
