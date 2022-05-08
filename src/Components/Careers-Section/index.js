import React from "react";
import Swiper from "../Swiper-section";
import Faq from "react-faq-component";
import Image2 from "../../Assets/media/images/careers-page/slide-1.jpg";
import Image1 from "../../Assets/media/images/careers-page/slide-2.jpg";
import Image3 from "../../Assets/media/images/careers-page/slide-3.jpg";
import styles from "./style.module.scss";

const TopPage = () => {
  const data = {
    rows: [
      {
        title: "UX/UI DESIGNER",
        content: `Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 

        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui.
        `,
      },
      {
        title: "WEB DEVELOPER — SENIOR",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "CONTENT STRATEGIST",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
              Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
              Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
              Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "COPYWRITER",
        content: <p>current version is 1.2.1</p>,
      },
    ],
  };
  return (
    <div className={`${styles.midDiv}`}>
      <div className="container">
        <div className="row mx-0">
          <div className={`col-lg-12 ${styles.text}`}>
          <div data-aos="fade-left">
            <span>Masamune è le persone che ne fanno parte. </span>
            </div>
          </div>
          <div className={`col-lg-6 ${styles.img}`}>
          <div data-aos="fade-right">
            <img alt="" src={Image2} />
            </div>
          </div>
          <div className={`col-lg-6 ${styles.img}`}>
            <span>
              Sono le storie, competenze e ambizioni di tutti noi a plasmare
              l’essenza dello studio. Un incastro perfetto di prestazioni,
              interazioni e relazioni che convergono verso il raggiungimento di
              un obiettivo comune.{" "}
            </span>
          </div>
          <div className={`col-lg-6 text-end ${styles.img}`}>
          <div data-aos="fade-right">
            <img alt="" src={Image1} />
            </div>
          </div>
          <div className={`col-lg-6 ${styles.img}`}>
            <span>
              Sono le storie, competenze e ambizioni di tutti noi a plasmare
              l’essenza dello studio. Un incastro perfetto di prestazioni,
              interazioni e relazioni che convergono verso il raggiungimento di
              un obiettivo comune.{" "}
            </span>
          </div>
          <div className={`col-lg-6 ${styles.img}`}>
          <div data-aos="fade-right">
            <img alt="" src={Image3} />
            </div>
          </div>
          <div className={`col-lg-6 ${styles.img}`}>
            <span>
              Sono le storie, competenze e ambizioni di tutti noi a plasmare
              l’essenza dello studio. Un incastro perfetto di prestazioni,
              interazioni e relazioni che convergono verso il raggiungimento di
              un obiettivo comune.{" "}
            </span>
          </div>
        </div>
      </div>
      <div className={`row mx-0 ${styles.lastSection}`}>
        <div className={`col-lg-12 text-center ${styles.values}`}>
          <span>I nostri core values</span>
        </div>
        <div className={`col-lg-6 ${styles.text1}`}>
          <p>Head in the clouds</p>
          <p>Feet in the ground</p>
          <p>Rethinking the client</p>
          <p>Learning tirelessly</p>
          <p>Cultivating talents </p>
          <p>Serious without a suit</p>
        </div>
        <div className={`col-lg-6 ${styles.text2}`}>
          <p>
            Pensiamo in grande e diamo libero sfogo alla nostra immaginazione. É
            proprio così, con la testa fra le nuvole, che la creatività prende
            forma dando vita alle intuizioni più inaspettate e alle idee più
            sorprendenti.
          </p>
          <img alt="" src={Image1} />
        </div>
      </div>
      <div className={`row mx-0 ${styles.lastSection}`}>
        <div className={`col-lg-12 my-3 ${styles.swiper}`}>
          <Swiper />
        </div>
      </div>
      <div className={`row mx-0 ${styles.textLast}`}>
        <div className={`col-lg-12 text-center ${styles.textHeading}`}>
          <span>Does that sound good to you?</span>
          <h1>
            Join the collective{" "}
            <svg
              width="35"
              height="35"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.8613 27.7072L28.5771 55.9914L0.292792 27.7071L1.70701 26.2929L27.6369 52.2228L27.6213 0.930766L29.6213 0.930767L29.6369 52.1032L55.4471 26.2929L56.8613 27.7072Z"
                fill="#1A1A1A"
              />
            </svg>
          </h1>
        </div>
          <div className={`px-5 ${styles.FAQ}`}>
          <Faq data={data} styles={styles} />
          </div>
      </div>
    </div>
  );
};

export default TopPage;
