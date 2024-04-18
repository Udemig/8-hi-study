import React from "react";
import { ButtonProps } from "../../types";

const CustomButton = ({ title, btnType, designs }: ButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      className={`custom-btn bg-[#2B59FF] rounded-full hover:bg-blue-800 transition text-white ${designs}`}
    >
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
