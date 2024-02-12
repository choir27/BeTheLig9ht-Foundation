import { FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from "./Nav";
import styles from "../css/styles.module.css";

export default function Footer() {
  const date = new Date();

  return (
    <footer className={`${styles.flex} ${styles.column} ${styles.alignCenter}`}>
      <section className={`${styles.flex} ${styles.justifyBetween}`}>
        <small>
          COPYRIGHT &copy; {date.getFullYear()} BETHELI9HT FOUNDATION - ALL
          RIGHTS RESERVED
        </small>

        <address>
          <ul
            className={`${styles.flex} ${styles.icons} ${styles.justifyBetween}`}
          >
            <li>
              <i className="fa-brands fa-x-twitter"></i>
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
          <a href="">125 RAILROAD AVE, SUITE 2, HIGHTSTOWN, NJ 08520</a>
        </address>
      </section>

      <Nav />
    </footer>
  );
}
