import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/global.css";
import styles from "../css/styles.module.css";
import Logo from "../assets/Logo.png";

export default function Home() {
  return (
    <main className={`${styles.flex} ${styles.column} ${styles.alignCenter}`}>
      <Header />
      <article>
        <section className={`${styles.flex} ${styles.alignCenter}`}>
          <img src={Logo.src} />
          <section>
            <h2>BeTheLi9ht Foundation</h2>
          </section>
        </section>
      </article>
      <Footer />
    </main>
  );
}
