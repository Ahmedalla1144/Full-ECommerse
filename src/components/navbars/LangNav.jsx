import { Link } from "react-router-dom";
import styles from "../../styles";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";

export default function LangNav() {
  const [IsOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-black-color text-white-color flex gap-5 px-8 py-3 text-sm lg:text-lg">
      <div className={`${styles.flex.center} flex-1 gap-2`}>
        <p className="text-navbar">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link to="/" className="underline font-semibold">
          ShopNow
        </Link>
      </div>

      <div
        className="flex cursor-pointer relative "
        onClick={() => {
          setIsOpen(!IsOpen);
        }}
      >
        <p>English</p>
        <RiArrowDropDownLine className="text-xl lg:text-3xl" />
        {IsOpen && (
          <div
            ref={dropdownRef}
            className={`absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
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
