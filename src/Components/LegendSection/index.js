import React from "react";
import image from "../../Assets/media/images/legend-page/image-full-screen.jpg";
import Image2 from "../../Assets/media/images/legend-page/image-content-1.jpg";
import Image3 from "../../Assets/media/images/legend-page/image-content-2.jpg";
import styles from "./style.module.scss";

const TopPage = () => {
  return (
    <div className={`${styles.midDiv}`}>
      <div className="container">
        <div className="row mx-0">
          <div className={`col-lg-6 text-start ${styles.img}`}>
            <img alt="" src={Image2} />
          </div>
          <div className={`col-lg-6 ${styles.text}`}>
            <p>
              Un'antica leggenda narra di una sfida fra due fabbri giapponesi,
              Masamune e Muramasa, per provare chi dei due fosse in grado di
              costruire la katana perfetta.
            </p>
          </div>
          <div className={`col-lg-12 ${styles.heading}`}>
            <h1>From legend to reality</h1>
          </div>
          <div className={`col-lg-6 ${styles.text2}`}>
            <p>
              Entrambi forgiarono due magnifiche spade e decisero di metterle
              alla prova appendendole a una sporgenza sopra un fiume, con la
              punta della lama immersa nell'acqua. Al momento della sfida, la
              spada di Muramasa tagliò ogni cosa che incontrava, pesci, foglie e
              addirittura il vento. La spada di Masamune, invece, non tagliò
              nulla. I pesci e le foglie la sfioravano incolumi, e il vento
              soffiava dolcemente sulla sua lama.{" "}
            </p>
          </div>
          <div className={`col-lg-6 text-end ${styles.img2}`}>
            <img alt="" src={Image3} />
          </div>
        </div>
      </div>
      <img alt="" src={image} className={styles.fullImage} />
      <div className="container">
        <div className={`row mx-0 ${styles.lastSection}`}>
          <div className={`col-lg-6 ${styles.text2}`}>
            <p>
              Entrambi forgiarono due magnifiche spade e decisero di metterle
              alla prova appendendole a una sporgenza sopra un fiume, con la
              punta della lama immersa nell'acqua. Al momento della sfida, la
              spada di Muramasa tagliò ogni cosa che incontrava, pesci, foglie e
              addirittura il vento. La spada di Masamune, invece, non tagliò
              nulla. I pesci e le foglie la sfioravano incolumi, e il vento
              soffiava dolcemente sulla sua lama.{" "}
            </p>
            <p>
              Non è un caso che il nostro studio si chiami proprio così.
              Masamune, perché ciò che rende una spada perfetta non è una lama
              tagliente, ma la sua capacità di scegliere cosa, come e quando
              colpire.
            </p>
          </div>
          <div className={`col-lg-6 text-end ${styles.img2}`}>
            <img alt="" src={Image3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
