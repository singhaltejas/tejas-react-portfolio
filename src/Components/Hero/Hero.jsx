import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tejas</h1>
        <p className={styles.description}>
        I'm a Master’s student in Computer Science at Texas A&M University with hands-on experience in software development at renowned organizations. I’m eager to make a meaningful impact at your company. Let's connect and explore how I can contribute to your team!
        </p>
        <a href="mailto:singhalt@tamu.edu" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
