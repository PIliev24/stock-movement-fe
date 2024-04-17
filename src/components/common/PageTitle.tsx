import React, { FC } from "react";
import PrimaryBtn from "./PrimaryBtn";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  navigateTo: string;
  btnText: string;
}

const PageTitle: FC<Props> = ({ navigateTo, title, btnText }) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(navigateTo);

  return (
    <div className="flex w-full justify-between items-center mb-6">
      <h1 className="font-bold text-4xl">{title}</h1>
      <PrimaryBtn onClick={handleNavigate} text={btnText} />
    </div>
  );
};

export default PageTitle;
