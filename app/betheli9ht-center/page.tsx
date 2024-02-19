"use client";
import Aside from "../../components/Aside";
import { Button } from "../../components/Buttons";
import styles from "../../css/styles.module.css";

export default function beTheLightCenter() {
  return (
    <main>
      <article>
        <h1>BETHELI9HT CENTER</h1>

        <ol>
          <li>
            <h3>What is it? </h3>
          </li>
          <li>
            <p>
              We are a place for teens and young adults (grades 6-12) to come
              and make friends, share joys as well as sorrows and a place to
              just BE. A place for people who feel lost, a place for people who
              have lost & a place for HOPE!
            </p>
          </li>

          <Aside
            heading="View Memories"
            buttonElement={Button({
              text: "View Photos",
              onClick: () => "",
              href: "",
              className: styles.button,
            })}
          />

          <li>
            <h3>When can I come?</h3>
          </li>
          <li>
            <p>
              We are temporarily closed weekdays after school, but will be
              holding monthly special events. Stay tuned by checking our
              calendar or following us on social media.
            </p>
          </li>

          <li>
            <h3>Where is it?</h3>
          </li>
          <li>
            <p>
              We are located on the second floor of the First United Methodist
              Church of Hightstown 187 Stockton Street, Hightstown, NJ 08520
            </p>
          </li>

          <li>
            <h3>What is there to do?</h3>
          </li>
          <li>
            <ul>
              <li>
                <h4>Some examples would include:</h4>
              </li>

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
            <h3>Are there any requirements?</h3>
          </li>
          <li>
            All Students must fill out our Code of Conduct and Parents/Guardians
            must fill out our waiver:
          </li>
          <li>
            <ul>
              <li>Student Code of Conduct</li>
              <li>Center Waiver</li>
              <li>Center Waiver (Spanish)</li>
            </ul>
          </li>

          <li>
            <h3>Additional Information</h3>
          </li>
          <li>For more information, email Rachelle@betheli9ht.org</li>
        </ol>
      </article>
    </main>
  );
}
