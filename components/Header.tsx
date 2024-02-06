import styles from "../css/styles.module.css";
import { ButtonLink } from "./Buttons";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <section className={styles.flex}>
        <Link href="/" className={styles.heading1}>
          <h1>BeTheLig9ht Foundation</h1>
        </Link>

        <h2 className={styles.phone}>(609) 336-7129</h2>
      </section>

      <nav>
        <ul
          className={`${styles.flex} ${styles.justifyBetween} ${styles.alignCenter}`}
        >
          <li className={styles.active}>
            <ButtonLink href="/" text="Home" />
          </li>
          <li>
            <ButtonLink href="/" text="About Us" />
          </li>
          <li>
            <ButtonLink href="/" text="BeTheLi9ht Center" />
          </li>
          <li>
            <ButtonLink href="/" text="Sponsors" />
          </li>
          <li>
            <ButtonLink href="/" text="Events" />
          </li>
          <li>
            <ButtonLink href="/" text="Contact Us" />
          </li>
          <li>
            <ButtonLink href="/" text="More" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
