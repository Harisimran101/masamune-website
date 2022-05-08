import React from "react";
import Swiper from "../Swiper-section";
import Faq from "react-faq-component";
import Image1 from "../../Assets/media/images/careers-page/slide-2.jpg";
import Image3 from "../../Assets/media/images/careers-page/slide-3.jpg";
import styles from "./style.module.scss";

const Approach = () => {
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
          <div className={`col-lg-12 ${styles.textFirst}`}>
          <div data-aos="zoom-in">
            <p>
              Sono le storie, competenze e ambizioni di tutti noi a plasmare
              l’essenza dello studio. Un incastro perfetto di prestazioni,
              interazioni e relazioni che convergono verso il raggiungimento di
              un obiettivo comune.{" "}
            </p>
            <p>
              Sono le storie, competenze e ambizioni di tutti noi a plasmare
              l’essenza dello studio. Un incastro perfetto di prestazioni,
              interazioni e relazioni che convergono verso il raggiungimento di
              un obiettivo comune.{" "}
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`row mx-0 ${styles.swiperLast}`}>
        <div className={`col-lg-12 my-3 ${styles.swiper}`}>
          <Swiper />
        </div>
      </div>
      <div className={`row mx-0 container ${styles.textLast}`}>
        <div className={`col-lg-6 py-5 text-center ${styles.textHeading}`}>
        <div data-aos="fade-right">
          <h1>Talent Sourcing</h1>
        </div>
        </div>
        <div className={`col-lg-6 py-5${styles.textHeading}`}><div data-aos="zoom-out">
        <div data-aos="fade-left">
          <p>
            Sono le storie, competenze e ambizioni di tutti noi a plasmare
            l’essenza dello studio. Un incastro perfetto di prestazioni,
            interazioni e relazioni che convergono verso il raggiungimento di un
            obiettivo comune.{" "}
          </p>
          <p>
            Sono le storie, competenze e ambizioni di tutti noi a plasmare
            l’essenza dello studio. Un incastro perfetto di prestazioni,
            interazioni e relazioni che convergono verso il raggiungimento di un
            obiettivo comune.{" "}
          </p></div>
          </div>
        </div>
        <div className={`col-lg-6 py-5 text-center ${styles.img1}`}>
        <div data-aos="fade-right">
          <img alt="" src={Image1} />
          </div>
        </div>
        <div className={`col-lg-6 py-5 ${styles.img2}`}>
        <div data-aos="fade-left">
          <img alt="" src={Image3} />
          </div>
        </div>
      </div>
      <div className="container">
      <div className={`row mx-0 ${styles.LastSection}`}>
        <div className={`col-lg-6 py-5 text-center ${styles.textHeading}`}>
        <div data-aos="fade-right">
          <h1>Team as-a-service</h1>
          </div>
        </div>
        <div className={`col-lg-6 py-5 ${styles.textHeading}`}>
        <div data-aos="fade-left">
          <p>
            Il nostro studio conta su un pool di professionisti di livello
            senior con competenze multidisciplinari e un workflow agile ben
            rodato, disponibili a lavorare al tuo progetto come una vera e
            propria estensione del tuo team, calibrata in base alle tue
            specifiche esigenze e obiettivi..{" "}
          </p>
          </div>
        </div>
        <div className={`col-lg-6 py-5 text-center ${styles.img2}`}>
        <div data-aos="fade-right">
          <img alt="" src={Image1} />
        </div>
        </div>
        <div className={`col-lg-6 py-5 ${styles.img1}`}>
        <div data-aos="fade-left">
          <img alt="" src={Image3} />
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Approach;
