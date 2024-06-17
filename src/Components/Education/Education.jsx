import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("education/educationImage.png")}
          alt="Me sitting with a laptop"
          className={styles.educationImage}
        />
        <ul className={styles.educationItems}>
          <li className={styles.educationItem}>
            <img src={getImageUrl("education/TAMULogo.png")} alt="TAMU Logo" />
            <div className={styles.educationItemText}>
              <h3>Master's in Computer Science</h3>
              <p>
                I'm a current Master’s student in Computer Science at Texas A&M University, set to graduate in May 2026.
              </p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img src={getImageUrl("education/MSULogo.png")} alt="MSU Logo" />
            <div className={styles.educationItemText}>
              <h3>Bachelors in Computer Science</h3>
              <p>
              Graduated with Honors in Computer Science from Michigan State University in May 2024, achieving a GPA of 3.866. 
              I was part of the EV Scholars Program and consistently made the Dean's List.
              </p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img src={getImageUrl("education/AWSLogo.png")} alt="AWS Logo" />
            <div className={styles.educationItemText}>
              <h3>AWS Certified Cloud Practitioner (CCP)</h3>
              <p>
                Achieved AWS Certified Cloud Practitioner (CCP) certification in February 2024.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
