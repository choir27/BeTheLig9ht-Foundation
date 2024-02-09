"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/global.css";
import styles from "../css/styles.module.css";
import Logo from "../assets/Logo.png";
import Cory from "../assets/Cory.png";
import SuicideAndCrisisLifeLine from "../assets/SuicideAndCrisisLifeLine.png";
import { Button } from "../components/Buttons";

export default function Home() {
  return (
    <main className={`${styles.flex} ${styles.column} ${styles.alignCenter}`}>
      <Header />
      <article
        className={`${styles.flex} ${styles.alignCenter} ${styles.hero}`}
      >
        <div className={styles.imageContainer}>
          <img
            src={Logo.src}
            alt="Be The Light Foundation purple circle Logo, with hands holding in the center with a yellow sun in the background"
          />
        </div>
        <section
          className={`${styles.flex} ${styles.column} ${styles.alignCenter}`}
        >
          <h3>Welcome</h3>
          <h2>
            BeTheLi9ht <br /> Foundation
          </h2>
          <h4>In Memory of Copy St. Phard</h4>
        </section>
      </article>

      <article
        className={`${styles.flex} ${styles.alignCenter} ${styles.origin} ${styles.justifyBetween}`}
      >
        <section
          className={`${styles.flex} ${styles.column} ${styles.alignStart}`}
        >
          <h2>Be A LI9ht</h2>

          <p>
            BeTheLi9ht was born out of the tragic loss of Coby St. Phard, a son,
            a brother, a friend, to suicide. In honor of his life, we want to
            spread being a Li9ht to others.
          </p>

          <p>
            The BeTheLi9ht Foundation (formerly Fly High Coby) was established
            by the family of Coby St. Phard to honor the memory of his 18 years
            on this earth.
          </p>

          <span>​#BeTheLi9ht</span>

          <span>Matthew 5:14-16</span>
        </section>
        <div className={styles.imageContainer}>
          <img src={Cory.src} alt="portrait photograph of Coby St. Phard" />
        </div>
      </article>

      <form
        className={`${styles.flex} ${styles.justifyBetween} ${styles.alignCenter} ${styles.form}`}
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
          <img
            src={SuicideAndCrisisLifeLine.src}
            alt="Suicide and Crisis LifeLine Logo"
          />
        </div>
      </aside>

      <Footer />
    </main>
  );
}
