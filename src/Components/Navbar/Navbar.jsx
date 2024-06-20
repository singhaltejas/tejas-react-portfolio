import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import resume from "../../../public/Tejas Singhal Resume.pdf";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle the download of the resume
  const onResumeClick = (e) => {
    e.preventDefault();

    fetch(resume).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = resume;
        alink.click();
      });
    });
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          {/* <li>
            <a href="#projects">Projects</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href={resume} onClick={onResumeClick}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
