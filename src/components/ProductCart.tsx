import Image from "next/image";
import React from "react";
import { BiHeart } from "react-icons/bi";
import { BsEye, BsStarFill } from "react-icons/bs";
import playStationArm from "../../public/playstationarm.png";

export default function ProductCart() {
  return (
    <div className="py-8 flex-shrink-0">
      {/* up div */}
      <div className="bg-[#F5F5F5] dark:bg-gray-950 flex px-5 py-3 justify-center rounded">
        <p className="px-3 py-1 bg-red-500 w-max h-max rounded text-sm">-40%</p>
        <Image
          width={190}
          height={180}
          src={playStationArm}
          alt="play Station Arm"
        />
        <div className="flex flex-col gap-1">
          <BiHeart className="text-xl" />
          <BsEye className="text-xl" />
        </div>
      </div>
      {/* down dev */}
      <div className="flex flex-col gap-2 pt-3">
        <p>HAVIT HV-G92 Gamepad</p>
        <p className="text-red-500">
          $120 <span className="text-gray-400 line-through pl-2">$160</span>
        </p>
        <div className="flex justify-start items-center gap-3">
          <div className="flex gap-1">
            <BsStarFill className="text-[#FFAD33]" />
            <BsStarFill className="text-[#FFAD33]" />
            <BsStarFill className="text-[#FFAD33]" />
            <BsStarFill className="text-[#FFAD33]" />
            <BsStarFill className="text-[#FFAD33]" />
          </div>
          <p>(88)</p>
        </div>
      </div>
    </div>
  );
}
