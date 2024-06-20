import { Link } from "react-router-dom";
import styles from "../../styles";

export default function Section4() {
  return (
    <>
      <section className={styles.footer.sections}>
        <h4 className={styles.footer.title2}>Quick Link</h4>
        <Link className={styles.footer.link} >Privacy Policy</Link>
        <Link className={styles.footer.link} >Terms Of Use</Link>
        <Link className={styles.footer.link} >FAQ</Link>
        <Link className={styles.footer.link} >Contact</Link>
      </section>
    </>
  );
}
