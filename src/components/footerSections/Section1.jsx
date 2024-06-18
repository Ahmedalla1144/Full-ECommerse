import { IoSendOutline } from "react-icons/io5";
import styles from "../../styles";

export default function Section1() {
  return (
    <>
      <section className={styles.sectionFooter}>
        <h4>{import.meta.env.VITE_APP_NAME}</h4>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <div>
          <input type="email" placeholder="Enter your email" />
          <IoSendOutline />
        </div>
      </section>
    </>
  );
}
