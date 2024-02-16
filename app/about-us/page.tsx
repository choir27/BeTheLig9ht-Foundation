import styles from "../../css/styles.module.css";
import { Button } from "../../components/Buttons";
import AboutUsCorySoccer from "../../assets/About_Us_Cory_Soccer.png";
import Image from "next/image";
import { about_us_text_context } from "./content";

export default function about_us() {
  return (
    <main
      className={`${styles.flex} ${styles.column} ${styles.alignCenter}`}
      id="about"
    >
      <article
        className={`${styles.flex} ${styles.column} ${styles.alignCenter} ${styles.about_hero}`}
      >
        <Image
          width={500}
          src={AboutUsCorySoccer}
          alt="Picture of Coby St. Phard playing soccer"
        />

        {about_us_text_context.map((value: string) => {
          return <p key={value}>{value}</p>;
        })}
      </article>
    </main>
  );
}
