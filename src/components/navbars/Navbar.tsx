'use client'
import { CiHeart, CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import styles from "../styles";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface navBarProps {
  appName: string;
}

export default function Navbar({appName}: navBarProps) {
  const pathname = usePathname();
  console.log(pathname)


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <div className={`icon border-b shadow-lg mb-5 pt-4 pb-2 px-10`}>
      <div>
        <p className="text-2xl font-bold">{appName}</p>
      </div>
      <div className={`${styles.flex.around} gap-5 font-medium`}>
        <Link
          className={`hover:underline underline-offset-4 transition-all ${
            pathname === "/" && "underline"
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`hover:underline underline-offset-4 transition-all ${
            pathname === "/contact" && "underline"
          }`}
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className={`hover:underline underline-offset-4 transition-all ${
            pathname === "/about" && "underline"
          }`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`hover:underline underline-offset-4 transition-all ${
            pathname === "/signup" && "underline"
          }`}
          href="/signup"
        >
          Sign Up
        </Link>
      </div>
      <div className={`${styles.flex.center} gap-2`}>
        <div>
          <label id="search" className={`${styles.flex.center} gap-2 border-2 px-2 py-1 rounded-md`}>
            <input
              className="outline-none w-full dark:bg-black"
              type="text"
              placeholder="What are you looking for?"
              id="search"
              name="search"
              onChange={handleSearch}
            />
            <CiSearch className="text-xl cursor-pointer " />
          </label>
        </div>
        <div className="flex text-xl gap-2">
          <CiHeart className="cursor-pointer" />
          <SlBasket className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
