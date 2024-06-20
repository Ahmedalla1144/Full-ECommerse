import { IoSendOutline } from "react-icons/io5";
import styles from "../../styles";

export default function Section1() {
  return (
    <>
      <section className={styles.footer.sections}>
        <h4 className={styles.footer.title1}>{import.meta.env.VITE_APP_NAME}</h4>
        <p className={styles.footer.title2}>Subscribe</p>
        <p className="" >Get 10% off your first order</p>
        <div className={`${styles.flex.center} gap-1 border-2 p-2 rounded-md`}>
          <input className="bg-black-color border-none outline-none" type="email" placeholder="Enter your email" />
          <IoSendOutline className="cursor-pointer" />
        </div>
      </section>
    </>
  );
}
