import React from "react";
import styles from "./style.module.scss";

const TopPage = () => {
  return (
    <div className={`${styles.midDiv}`}>
      <div className="container">
        <div className="row mx-0">
          <div className="col-lg-12">
            <h3>Come possiamo aiutarti</h3>
            <div className={styles.textService}>
            <div data-aos="zoom-in">
              <span>
                Mettiamo a tua completa disposizione l’attitudine e le
                competenze che servono davvero per costruire, trasformare e far
                crescere il tuo business e il tuo brand.
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
