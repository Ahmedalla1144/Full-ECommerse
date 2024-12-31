import React from "react";
import { BsSmartwatch } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";
import { GiSmartphone } from "react-icons/gi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { RiGamepadLine } from "react-icons/ri";

const categories = [
  { name: "Phones", icon: <GiSmartphone className="text-5xl" /> },
  {
    name: "Computers",
    icon: <HiOutlineComputerDesktop className="text-5xl" />,
  },
  { name: "SmartWatch", icon: <BsSmartwatch className="text-5xl" /> },
  { name: "HeadPhones", icon: <CiHeadphones className="text-5xl" /> },
  { name: "Gaming", icon: <RiGamepadLine className="text-5xl" /> },
];

export default function Categories() {
  return categories.map((category, index) => {
    return (
      <div
        className="flex flex-col gap-5 w-[170px] h-[145px] rouned border border-gray-500 shrink-0 justify-center items-center hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
        key={index}
      >
        {category.icon}
        <p>{category.name}</p>
      </div>
    );
  });
}
