import React from "react";
import Image2 from "../../Assets/media/images/magazine-page/item-content-1.jpg";
import Image from "../../Assets/media/images/magazine-page/item-content-2.jpg";
import Image3 from "../../Assets/media/images/magazine-page/item-content-3.jpg";
import Image4 from "../../Assets/media/images/magazine-page/item-content-4.jpg";
import styles from "./style.module.scss";

const TopPage = () => {
  return (
    <div className={`${styles.midDiv}`}>
      <div className="container">
        <div className="row mx-0">
          <div className={`col-lg-6 text-start ${styles.img}`}>
            <div data-aos="zoom-in-right">
              <img alt="" src={Image2} />
            </div>
          </div>
          <div className={`col-lg-6 ${styles.text}`}>
            <div data-aos="zoom-in-left">
              <p>
                Un'antica leggenda narra di una sfida fra due fabbri giapponesi,
                Masamune e Muramasa, per provare chi dei due fosse in grado di
                costruire la katana perfetta.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`row mx-0 ${styles.lastSection}`}>
        <div className={`col-lg-12 text-center ${styles.text2}`}>
          <div data-aos="zoom-in-right">
            <span>01</span>
            <span className={styles.heading1}>TIPS & TRICK</span>
          </div>
        </div>
        <div className={`col-lg-12 text-end ${styles.text2}`}>
          <div data-aos="zoom-in-left">
            <span>02</span>
            <span className={styles.heading1}>DIGITAL UPDATES</span>
          </div>
        </div>
        <div className={`col-lg-12 text-end ${styles.text2}`}>
          <div data-aos="zoom-in-left">
            <span>03</span>
            <span className={styles.heading1}>FOOD FOR THOUGHTS</span>
          </div>
        </div>
        <div className={`col-lg-12 text-end ${styles.text2}`}>
          <div data-aos="zoom-in-left">
            <span>04</span>
            <span className={styles.heading1}>LIFE AT THE STUDIO</span>
          </div>
        </div>
      </div>
      <div className={`row mx-0 ${styles.lastSection}`}>
        <div className={`col-lg-12 my-3 ${styles.heading}`}>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1>POPULAR</h1>
          </div>
        </div>
        <div className={`col-lg-4 text-end my-5 ${styles.text2}`}>
          <div data-aos="fade-right">
            <img alt="" src={Image} />
          </div>
        </div>
        <div className={`col-lg-8 my-5 ${styles.lastText}`}>
          <div data-aos="fade-left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
        <div className={`col-lg-6 text-end my-5 ${styles.text2}`}>
          <div data-aos="fade-right">
            <img alt="" src={Image3} />
          </div>
        </div>
        <div className={`col-lg-6 my-5 ${styles.lastText}`}>
          <div data-aos="fade-left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
        <div className={`col-lg-6 text-end my-5 ${styles.text2}`}>
          <div data-aos="fade-left">
            <img alt="" src={Image4} />
          </div>
        </div>
        <div className={`col-lg-6 my-5 ${styles.lastText}`}>
          <div data-aos="fade-right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
