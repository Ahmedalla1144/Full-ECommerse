import { CiHeart, CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import styles from "../../styles";

export default function Navbar() {
  return (
    <div className={`${styles.flex.around} flex-wrap gap-3 border-b pt-4 pb-2 px-10 text-black-color`}>
      <div className="">
        <p className="text-2xl font-bold" >Exclusive</p>
      </div>
      <div className={`${styles.flex.around}  gap-5 font-medium`}>
        <Link className="hover:underline underline-offset-4 transition-all" to="/">Home</Link>
        <Link className="hover:underline underline-offset-4 transition-all" to="/">Contact</Link>
        <Link className="hover:underline underline-offset-4 transition-all" to="/">About</Link>
        <Link className="hover:underline underline-offset-4 transition-all" to="/">Sign Up</Link>
      </div>
      <div className={`${styles.flex.center} gap-2`}>
        <div className={`${styles.flex.center} gap-2`}>
          <input
            className="border-none outline-none w-full"
            type="text"
            placeholder="What are you looking for?"
          />
          <CiSearch className="text-xl cursor-pointer " />
        </div>
        <div className="flex text-xl gap-1">
          <CiHeart  className="cursor-pointer"/>
          <SlBasket className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
