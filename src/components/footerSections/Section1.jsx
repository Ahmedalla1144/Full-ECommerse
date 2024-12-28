import { IoSendOutline } from "react-icons/io5";
import styles from "../styles";
import { metadata } from "@/app/layout";

export default function Section1() {
  return (
    <>
      <section className={styles.footer.sections}>
      {/* <section className="flex flex-col justify-start items-start gap-3 w-60 h-64 border-b border-gray-800 xs:border-none"> */}
        <h4 className={styles.footer.title1}>{metadata.applicationName}</h4>
        <p className={styles.footer.title2}>Subscribe</p>
        <p className="" >Get 10% off your first order</p>
        <div className={`${styles.flex.center} gap-1 border-2 p-2 rounded-md`}>
          <input className="bg-black border-none outline-none" type="email" placeholder="Enter your email" />
          <IoSendOutline className="cursor-pointer" />
        </div>
      </section>
    </>
  );
}
