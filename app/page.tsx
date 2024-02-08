import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/global.css";
import styles from "../css/styles.module.css";
import Logo from "../assets/Logo.png";
import Cory from "../assets/Cory.png";

export default function Home() {
  return (
    <main className={`${styles.flex} ${styles.column} ${styles.alignCenter}`}>
      <Header />
      <article className={`${styles.flex} ${styles.alignCenter} ${styles.hero}`}>
          <div className = {styles.imageContainer}>
            <img src={Logo.src} />
          </div>
          <section className = {`${styles.flex} ${styles.column} ${styles.alignCenter}`}>
            <h3>Welcome</h3>
            <h2>BeTheLi9ht <br/> Foundation</h2>
            <h4>In Memory of Copy St. Phard</h4>
          </section>
      </article>

      <article className={`${styles.flex} ${styles.alignCenter} ${styles.cory} ${styles.justifyBetween}`}>
        <section className = {`${styles.flex} ${styles.column} ${styles.alignStart}`}>
          <h2>Be A LI9ht</h2>

          <p>BeTheLi9ht was born out of the tragic loss of Coby St. Phard, a son, a brother, a friend, to suicide.  In honor of his life, we want to spread being a Li9ht to others.</p>
            
          <p>The BeTheLi9ht Foundation (formerly Fly High Coby) was established by the family of Coby St. Phard to honor the memory of his 18 years on this earth.</p>

          <span>​#BeTheLi9ht</span>

          <span>Matthew 5:14-16</span>
        </section>
        <div className = {styles.imageContainer}>
          <img src={Cory.src}/>
        </div>
      </article>

      <Footer />
    </main>
  );
}
