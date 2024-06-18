import { Link } from "react-router-dom";
import styles from "../../styles";

export default function Section4() {
  return (
    <>
      <section className={styles.sectionFooter}>
        <h4>Quick Link</h4>
        <Link>Privacy Policy</Link>
        <Link>Terms Of Use</Link>
        <Link>FAQ</Link>
        <Link>Contact</Link>
      </section>
    </>
  );
}
