import { Link } from "react-router-dom";
import styles from "../../styles";

export default function Section2() {
  return (
    <>
      <section className={styles.footer.sections}>
        <h4 className={styles.footer.title2}>Support</h4>
        <Link>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Link>
        <Link>exclusive@gmail.com</Link>
        <Link>+88015-88888-9999</Link>
      </section>
    </>
  );
}
