import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./style.module.scss";
import AnimatedLine from "../animatedLine";

export default function Header({ navImage, setState, navImage2,navImage3 }) {
  const handleClick = () => {
    setState(false);
  };
  return (
    <div className={`${styles.mainHeader}`}>
      <div className="row">
        <div className="col-lg-4 col-sm-4">
          <ul className={styles.list}>
            <Link to="projects">
              <li onClick={handleClick}>
                Progetti
                <div className={styles.line}></div>
              </li>
            </Link>
            <Link to="about">
              <li onClick={handleClick} className={styles.about}>
                Chi siamo<div className={styles.line}></div>
              </li>
            </Link>
            <Link to="Approach">
              <li onClick={handleClick}>
                Approccio<div className={styles.line}></div>
              </li>
            </Link>
            <Link to="service">
              <li onClick={handleClick}>
                Servizi<div className={styles.line}></div>
              </li>
            </Link>
            <Link to="magazine">
              <li onClick={handleClick}>
                Magazine<div className={styles.line}></div>
              </li>
            </Link>
            <Link to="careers">
              <li onClick={handleClick}>
                Careers<div className={styles.line}></div>
              </li>
            </Link>
            <Link to="Talent_Solutions">
              <li onClick={handleClick}>
                Talent solutions<div className={styles.line}></div>
              </li>
            </Link>
          </ul>
        </div>
        <div className={`col-lg-4 d-md-block d-sm-none ${styles.img}`}>
          <img src={navImage} alt="" />
          <img src={navImage} alt="" className={styles.img2} />
          <img src={navImage} alt="" className={styles.img3}/>
        </div>
        <div className={`col-lg-4 col-sm-6`}>
          <div className={` ${styles.rifhtText}`}>
            <span>Sai perchè Masamune?</span>
            <h3>Scopri la leggenda</h3>
          </div>
          <div className={` ${styles.rifhtText}`}>
            <span>Contattaci</span>
            <h3>info@masamune.it</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
