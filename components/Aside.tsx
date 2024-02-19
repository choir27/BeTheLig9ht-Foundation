import styles from "../css/styles.module.css";
import { AsideInterface } from "../middleware/Interfaces";

export default function Aside(props: AsideInterface) {
  return (
    <aside
      className={`${styles.flex} ${styles.column} ${styles.alignCenter} ${styles.aside}`}
    >
      <h4>{props.heading}</h4>
      {props.paragraph ?? props.paragraph}
      {props.buttonElement}
    </aside>
  );
}
