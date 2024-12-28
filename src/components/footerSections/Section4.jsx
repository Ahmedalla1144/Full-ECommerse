import styles from "../styles";
import Link from "next/link";

export default function Section4() {
  return (
    <>
      <section className={styles.footer.sections}>
        <h4 className={styles.footer.title2}>Quick Link</h4>
        <Link href='/' className={styles.footer.link} >Privacy Policy</Link>
        <Link href='/' className={styles.footer.link} >Terms Of Use</Link>
        <Link href='/' className={styles.footer.link} >FAQ</Link>
        <Link href='/' className={styles.footer.link} >Contact</Link>
      </section>
    </>
  );
}
