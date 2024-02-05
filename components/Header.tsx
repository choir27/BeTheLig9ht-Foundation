import styles from "../css/styles.module.css";

export default function Header() {
  return (
    <header>
      <section className={styles.flex}>
        <h1>BeTheLig9ht Foundation</h1>

        <h2 className={styles.phone}>(609) 336-7129</h2>
      </section>

      <nav>
        <ul
          className={`${styles.flex} ${styles.justifyBetween} ${styles.alignCenter}`}
        >
          <li>Home</li>
          <li>About Us</li>
          <li>BeTheLi9ht Center</li>
          <li>Sponsors</li>
          <li>Events</li>
          <li>Contact Us</li>
          <li>More</li>
        </ul>
      </nav>
    </header>
  );
}
