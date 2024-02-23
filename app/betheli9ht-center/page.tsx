"use client";
import Aside from "../../components/Aside";
import { Button, ButtonLink } from "../../components/Buttons";
import styles from "../../css/styles.module.css";
import Center_Flyer from "../../assets/Center_Flyer.png";
import Image from "next/image";

export default function beTheLightCenter() {
  return (
    <main id="center">
      <h2>BETHELI9HT CENTER</h2>

      <article className={`${styles.flex} ${styles.alignStart}`}>
        <ol>
          <li>
            <h3>What is it? </h3>
            <p>
              We are a place for teens and young adults (grades 6-12) to come
              and make friends, share joys as well as sorrows and a place to
              just BE. A place for people who feel lost, a place for people who
              have lost & a place for HOPE!
            </p>
          </li>

          <li>
            <h3>When can I come?</h3>
            <p>
              We are temporarily closed weekdays after school, but will be
              holding monthly special events. Stay tuned by checking our
              calendar or following us on social media.
            </p>
          </li>
          <li>
            <h3>Where is it?</h3>
            <p>
              We are located on the second floor of the First United Methodist
              Church of Hightstown 187 Stockton Street, Hightstown, NJ 08520
            </p>
          </li>

          <li className={styles.list}>
            <h3>What is there to do?</h3>
            <h4>Some examples would include:</h4>
            <ul className="list">
              <li>Chill Space</li>
              <li>Hang with Friends</li>
              <li>Study/Homework Area</li>
              <li>Community Service Projects</li>
              <li>Coffee House/Open Mic Nights</li>
              <li>Art/Music Space</li>
              <li>Games/Puzzles</li>
              <li>Special Events</li>
            </ul>
          </li>

          <li>
            <h4>Are there any requirements?</h4>
            <span>
              All Students must fill out our Code of Conduct and
              Parents/Guardians must fill out our waiver:
            </span>
            <ul className={styles.list}>
              <li>
                {ButtonLink({
                  target: true,
                  text: "Student Code Of Conduct",
                  href: "https://form.jotform.com/Rachelle_rachelle_rachelle628/betheli9ht-student-code-of-conduct",
                })}
              </li>
              <li>
                {ButtonLink({
                  target: true,
                  text: "Center Waiver",
                  href: "https://form.jotform.com/Rachelle_rachelle_rachelle628/the-betheli9ht-center-waiver",
                })}
              </li>
              <li>
                {ButtonLink({
                  target: true,
                  text: "Center Waiver (Spanish)",
                  href: "https://drive.google.com/file/d/1-8owARe2thOWfHBF3esQh_uki5Og5p2E/view",
                })}
              </li>
            </ul>
          </li>

          <li>
            <h3>Additional Information</h3>
            <span>For more information, email Rachelle@betheli9ht.org</span>
          </li>
        </ol>

        <section>
        <Image src={Center_Flyer} alt="" width={500} />

          <Aside
            heading="View Memories"
            buttonElement={Button({
              text: "View Photos",
              onClick: () => "",
              href: "",
              className: styles.button,
            })}
          />

        </section>
      </article>
    </main>
  );
}
