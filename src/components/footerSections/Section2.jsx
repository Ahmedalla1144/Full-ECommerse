import { Link } from "react-router-dom";
import styles from "../../styles";

export default function Section2() {
  return (
    <>
      <section className={styles.footer.sections}>
        <h4 className={styles.footer.title2}>Support</h4>
        <Link className={styles.footer.link} >111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Link>
        <Link className={styles.footer.link} >exclusive@gmail.com</Link>
        <Link className={styles.footer.link} >+88015-88888-9999</Link>
      </section>
    </>
  );
}
