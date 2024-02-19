"use client";
import React from "react";
import { ButtonLink } from "./Buttons";
import styles from "../css/styles.module.css";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const urls = {
    home: pathname.length == 1,
    about: pathname.includes("about"),
    light: pathname.includes("betheli9ht-center"),
    sponsor: pathname.includes("sponsors"),
    events: pathname.includes("events-gallery"),
    contact: pathname.includes("contact-us"),
  };

  return (
    <nav>
      <ul
        className={`${styles.flex} ${styles.justifyBetween} ${styles.alignCenter}`}
      >
        <li>
          <ButtonLink
            className={urls.home ? styles.active : ""}
            href="/"
            text="Home"
          />
        </li>
        <li>
          <ButtonLink
            className={urls.about ? styles.active : ""}
            href="/about-us"
            text="About Us"
          />
        </li>
        <li>
          <ButtonLink
            className={urls.light ? styles.active : ""}
            href="/betheli9ht-center"
            text="BeTheLi9ht Center"
          />
        </li>
        <li>
          <ButtonLink
            className={urls.sponsor ? styles.active : ""}
            href="/sponsors"
            text="Sponsors"
          />
        </li>
        <li>
          <ButtonLink
            className={urls.events ? styles.active : ""}
            href="/events-gallery"
            text="Events"
          />
        </li>
        <li>
          <ButtonLink
            className={urls.contact ? styles.active : ""}
            href="/contact-us"
            text="Contact Us"
          />
        </li>
        <li>
          <ButtonLink href="/" text="More" />
        </li>
      </ul>
    </nav>
  );
}
