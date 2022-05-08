import React from "react";
import image from "../../Assets/media/images/services-page/image-1.jpg";
import Image2 from "../../Assets/media/images/services-page/image-2.jpg";
import Image3 from "../../Assets/media/images/services-page/image-3.jpg";
import styles from "./style.module.scss";

const TopPage = () => {
  return (
    <div className={`${styles.midDiv}`}>
      <div className="container">
        <div className="row mx-0">
          <div className={`col-lg-3 ${styles.text}`}>
            <p>Get the edge </p>
            <p>to deserve.</p>
            <p>— Masamune. 16 - 21©</p>
          </div>
          <div className={`col-lg-9 ${styles.Images}`}>
            <div data-aos="fade-up" data-aos-duration="3000">
              <img alt="" src={image} className={styles.image1} />
              <img alt="" src={Image2} className={styles.image2} />
              <img alt="" src={Image3} className={styles.image3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
