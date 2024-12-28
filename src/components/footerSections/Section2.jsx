import styles from "../styles";
import Link from "next/link";

export default function Section2() {
  return (
    <>
      <section className={styles.footer.sections}>
        <h4 className={styles.footer.title2}>Support</h4>
        <Link href='/' className={styles.footer.link} >111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Link>
        <Link href='/' className={styles.footer.link} >exclusive@gmail.com</Link>
        <Link href='/' className={styles.footer.link} >+88015-88888-9999</Link>
      </section>
    </>
  );
}
