"use client";
import styles from "../styles";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useRef, useState } from "react";
import Link from "next/link";

export default function LangNav() {
  const [IsOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <div className="bg-black text-white flex gap-5 px-3 xs:px-8 py-3 text-sm lg:text-lg">
      <div className="flex flex-wrap justify-start xs:justify-center items-center gap-2 flex-1">
        <p className="text-navbar">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link href="/" className="underline font-semibold">
          ShopNow
        </Link>
      </div>

      <div
        className={`flex cursor-pointer relative h-max hover:bg-slate-800 rounded-lg pl-4 px-2 py-2 transition-all duration-200 ease-out ${
          IsOpen && "bg-slate-800"
        }`}
        onClick={() => {
          setIsOpen(!IsOpen);
        }}
      >
        <p>English</p>
        <RiArrowDropDownLine className="text-xl lg:text-3xl" />
        {IsOpen && (
          <div
            ref={dropdownRef}
            className={`absolute top-full right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
              IsOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <ul className="py-2">
              <li className={styles.LangLi}>English</li>
              <li className={styles.LangLi}>Spanish</li>
              <li className={styles.LangLi}>French</li>
              <li className={styles.LangLi}>German</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
