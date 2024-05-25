export const Button = ({ text, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className="mx-4 my-2 rounded-md px-8 py-2"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};
