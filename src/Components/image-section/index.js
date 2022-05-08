import React from "react";
import image from "../../Assets/media/images/about-page/3.jpg";
import Image2 from "../../Assets/media/images/about-page/4.jpg";
import image3 from "../../Assets/media/images/about-page/5.jpg";
import styles from "./style.module.scss";

const TopPage = () => {
  return (
    <div className={`${styles.midDiv}`}>
      <div className="container">
        <div className="row mx-0">
          <div className={`col-lg-8 col-sm-8 ${styles.lefttImage}`}>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              <img alt="" src={Image2} className={styles.image1} />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              <img alt="" src={image} className={styles.image2} />
            </div>
          </div>
          <div className="col-lg-4 col-sm-4">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              <img alt="" src={image3} className={styles.image3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
