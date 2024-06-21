import styles from "../../styles";
import { CiHeart, CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const pathname = useLocation().pathname;

  return (
    <div className={` ${styles.flex.setAll('around', 'center', 'row', 3)} flex-wrap border-b shadow-lg mb-5 pt-4 pb-2 px-10 text-black-color`}>

    {/* // <div className={`flex justify-around items-center flex-wrap gap-3 border-b shadow-lg mb-5 pt-4 pb-2 px-10 text-black-color`}> */}

      <div>
        <p className="text-2xl font-bold">{import.meta.env.VITE_APP_NAME}</p>
      </div>
      <div className={`${styles.flex.around} gap-5 font-medium`}>
        <Link
          className={`hover:underline underline-offset-4 transition-all ${
            pathname === "/" && "underline"
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`hover:underline underline-offset-4 transition-all ${
            pathname === "/contact" && "underline"
          }`}
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className={`hover:underline underline-offset-4 transition-all ${
            pathname === "/about" && "underline"
          }`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`hover:underline underline-offset-4 transition-all ${
            pathname === "/signup" && "underline"
          }`}
          to="/signup"
        >
          Sign Up
        </Link>
      </div>
      <div className={`${styles.flex.center} gap-2`}>
        <div>
          <label id="search" className={`${styles.flex.center} gap-2`}>
            <input
              className="border-none outline-none w-full"
              type="text"
              placeholder="What are you looking for?"
              id="search"
              name="search"
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
