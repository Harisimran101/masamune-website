import React from "react";
// import image from "../../Assets/media/images/home-page/image-square-1.jpg"
import Image2 from "../../Assets/media/images/home-page/2.jpg"
import styles from "./style.module.scss"

const TopPage = () => {
  let page = window.location.href;
  let home = page.split("/");
  let HomePage = home[3];
  return (
      <div className={`${styles.midDiv}`}>
        <div className="container">
    <div className="row mx-0">
    {HomePage === "about" ? (
            <div className="col-lg-6">
        <div className={styles.rightText}>
        <div data-aos="flip-left">
          <span>Mettiamo a tua disposizione le competenze e l’attitudine che ti servono davvero per costruire, far crescere e trasformare il tuo brand.</span>
        </div>
        </div>
      </div>
    ):(
      <div className={`col-lg-6 text-center ${styles.lefttImage}`}>
        <div data-aos="fade-down-right">
      <img alt="" src={Image2} />
        </div>
      </div>
    )}
      <div className="col-lg-6">
        <div className={styles.text}>
      <div data-aos="fade-down-left">
          <span>Mettiamo a tua disposizione le competenze e l’attitudine che ti servono davvero per costruire, far crescere e trasformare il tuo brand.</span>
        </div>
      </div>
      </div>
    </div>
        </div>
      </div>
  );
};

export default TopPage;
