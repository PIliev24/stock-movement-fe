import { FC } from "react";

interface Props {
  onClick: () => void;
  text: string;
}

const PrimaryBtn: FC<Props> = ({ onClick, text }) => {
  return (
    <button
      className="p-3 rounded-md bg-gray-300 hover:bg-gray-400 active:bg-gray-500 text-black text-sm"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryBtn;
