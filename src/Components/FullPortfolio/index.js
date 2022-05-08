import React, { useState } from "react";
import styles from "./style.module.scss";
import img from "../../Assets/media/images/home-page/3.jpg";

const FullPortfoltio = () => {
  let page = window.location.href;
  let home = page.split("/");
  let HomePage = home[3];
  return (
    <div className={`${styles.portfolioDiv}`}>
      <div className="row mx-0">
        {HomePage === "about" ? (
          <>
            <div className={`col-lg-12 text-center ${styles.edge}`}>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              <h1>WE ARE A</h1>
              <p>Cutting-edge</p>
              <p>Digital</p>
              <p>Creative</p>
              <p>Creative</p>
</div>
            </div>
          </>
        ) : (
          <>
            <div className={`col-lg-6 text-end ${styles.text}`}>
              <span>Full Portfolio</span>
            </div>
            <div className={`col-lg-6 ${styles.img}`}>
              <img alt="" src={img} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FullPortfoltio;
