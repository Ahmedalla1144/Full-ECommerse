import styles from "../styles";
import Link from "next/link";

export default function Section3() {
  return (
    <>
      <section className={styles.footer.sections}>
        <h4 className={styles.footer.title2}>Account</h4>
        <Link href='/' className={styles.footer.link}>My Account</Link>
        <p>
          <Link href='/' className={styles.footer.link}>Login</Link> /{" "}
          <Link href='/' className={styles.footer.link}>Register</Link>
        </p>
        <Link href='/' className={`${styles.footer.link}`}>Cart</Link>
        <Link href='/' className={styles.footer.link}>Wishlist</Link>
        <Link href='/' className={styles.footer.link}>Shop</Link>
      </section>
    </>
  );
}
