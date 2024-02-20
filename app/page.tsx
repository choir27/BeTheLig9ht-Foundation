"use client";
import styles from "../css/styles.module.css";
import Logo from "../assets/Logo.png";
import Cory from "../assets/Cory.png";
import SuicideAndCrisisLifeLine from "../assets/Suicide_And_Crisis_Life_Line.png";
import { Button } from "../components/Buttons";
import Image from "next/image";
import {home_content} from "./content";

export default function Home() {
  return (
    <main
      className={`${styles.flex} ${styles.column} ${styles.alignCenter}`}
      id="home"
    >
      <article
        className={`${styles.flex} ${styles.alignCenter} ${styles.hero}`}
      >
        <div className={styles.imageContainer}>
          <Image
            src={Logo}
            width={900}
            alt="Be The Light Foundation purple circle Logo, with hands holding in the center with a yellow sun in the background"
          />
        </div>
        <section
          className={`${styles.flex} ${styles.column} ${styles.alignCenter}`}
        >
          <h2>{home_content.hero.h2}</h2>
          <h4>{home_content.hero.h4}</h4>
        </section>
      </article>

      <article
        className={`${styles.flex} ${styles.alignCenter} ${styles.origin} ${styles.justifyBetween}`}
      >
        <div className={`${styles.flex} ${styles.justifyCenter}`}>
          <section
            className={`${styles.flex} ${styles.column} ${styles.alignStart} `}
          >
            <h2>Be A LI9ht</h2>

            <p>
              BeTheLi9ht was born out of the tragic loss of Coby St. Phard, a
              son, a brother, a friend, to suicide. In honor of his life, we
              want to spread being a Li9ht to others.
            </p>

            <p>
              The BeTheLi9ht Foundation (formerly Fly High Coby) was established
              by the family of Coby St. Phard to honor the memory of his 18
              years on this earth.
            </p>

            <span>​#BeTheLi9ht</span>

            <span>Matthew 5:14-16</span>
          </section>
        </div>

        <div className={styles.imageContainer}>
          <Image
            width={800}
            src={Cory}
            alt="portrait photograph of Coby St. Phard"
          />
        </div>
      </article>

      <form
        className={`${styles.flex} ${styles.justifyBetween} ${styles.alignEnd} ${styles.form}`}
      >
        <label htmlFor="email">Would you like more information?</label>
        <input
          placeholder="Email Address"
          type="email"
          name="email"
          id="email"
        />
        <Button className="button" onClick={() => ""} text="Sign up" href="" />
      </form>

      <aside
        className={`${styles.imageContainer} ${styles.flex} ${styles.column} ${styles.alignCenter}`}
      >
        <h4>If you or someone you know is struggling, please call</h4>
        <h3>National Suicide Prevention LifeLine: 988</h3>

        <div>
          <Image
            src={SuicideAndCrisisLifeLine}
            alt="Suicide and Crisis LifeLine Logo"
          />
        </div>
      </aside>
    </main>
  );
}
