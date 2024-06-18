import { Link } from "react-router-dom";
import styles from "../../styles";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function LangNav() {
  return (
    <div className="bg-black text-white-color flex px-8 py-3 text-sm lg:text-lg">
      <div className={`${styles.flex.center} flex-1 gap-2`}>
        <p className="text-navbar">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link to="/" className="underline font-semibold">
          ShopNow
        </Link>
      </div>

      <div className="flex cursor-pointer">
        <p>English</p>
        <RiArrowDropDownLine className="text-3xl" />
      </div>
    </div>
  );
}
