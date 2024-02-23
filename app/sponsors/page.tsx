"use client";
import styles from "../../css/styles.module.css";
import { sponsorContent } from "./content";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { SponsorInterface } from "../../middleware/Interfaces";

export default function Sponsors() {
  const content: JSX.Element[] = [];

  for (const [key, value] of Object.entries(sponsorContent)) {
    content.push(
      <section
        key={`${value} ${key}`}
        className={`${styles.flex} ${styles.column} ${styles.alignCenter}`}
      >
        <h2>A Special Thank You To Our {key} Sponsors</h2>
        <div className={`${styles.flex} ${styles.alignCenter} `}>{value}</div>
      </section>,
    );
  }

  return (
    <main
      className={`${styles.flex} ${styles.column} ${styles.alignCenter}`}
      id="sponsors"
    >
      {content}
    </main>
  );
}
