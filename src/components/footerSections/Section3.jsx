import { Link } from "react-router-dom";
import styles from "../../styles";

export default function Section3() {
  return (
    <>
      <section className={styles.sectionFooter}>
        <h4>Account</h4>
        <Link>My Account</Link>
        <p><Link>Login</Link> / <Link>Register</Link></p>
        <Link>Cart</Link>
        <Link>Wishlist</Link>
        <Link>Shop</Link>
      </section>
    </>
  );
}
