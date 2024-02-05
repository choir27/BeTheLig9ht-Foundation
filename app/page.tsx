import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/global.css";
import styles from "../css/styles.module.css";

export default function Home() {
  return (
    <main className={`${styles.flex} ${styles.column} ${styles.alignCenter}`}>
      <Header />
      <h1>Home</h1>
      <Footer />
    </main>
  );
}
