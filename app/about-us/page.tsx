import styles from "../../css/styles.module.css";
import { Button } from "../../components/Buttons";
import AboutUsCorySoccer from "../../assets/About_Us_Cory_Soccer.png";
import Image from "next/image";

export default function about_us() {
  return (
    <main className={`${styles.flex} ${styles.column} ${styles.alignCenter}`}>
      <article>
        <Image src={AboutUsCorySoccer} alt="" />
      </article>
    </main>
  );
}
