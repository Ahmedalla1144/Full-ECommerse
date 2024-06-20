import { Link } from "react-router-dom";
import styles from "../../styles";

export default function Section3() {
  return (
    <>
      <section className={styles.footer.sections}>
        <h4 className={styles.footer.title2}>Account</h4>
        <Link className={styles.footer.link} >My Account</Link>
        <p><Link className={styles.footer.link} >Login</Link> / <Link className={styles.footer.link} >Register</Link></p>
        <Link className={`${styles.footer.link}`} >Cart</Link>
        <Link className={styles.footer.link} >Wishlist</Link>
        <Link className={styles.footer.link} >Shop</Link>
      </section>
    </>
  );
}
