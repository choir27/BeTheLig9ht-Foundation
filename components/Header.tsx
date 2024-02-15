import styles from "../css/styles.module.css";
import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className={`${styles.flex} ${styles.column}`}>
      <section
        className={`${styles.flex} ${styles.justifyBetween} ${styles.alignCenter}`}
      >
        <Link href="/" className={styles.heading1}>
          <h1>BeTheLig9ht Foundation</h1>
        </Link>

        <h2 className={styles.phone}>(609) 336-7129</h2>
      </section>
      <Nav />
    </header>
  );
}
