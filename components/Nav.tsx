import { ButtonLink } from "./Buttons";
import styles from "../css/styles.module.css";

export default function Nav() {
  return (
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
  );
}
