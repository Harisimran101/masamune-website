import React from "react";
import styles from "./style.module.scss";
import Img from "../../Assets/media/images/approach-page/2.jpg";

const ErrorPage = (props) => {
  return (
    <div className={`${styles.mainDiv}`}>
      <div className="row mx-0">
        <div className="col-lg-7">
          <div className={styles.textImage}>
          <h1>OOPS</h1>
            <span>
              Non era previsto che tu finissi qui. Visto che ci sei, goditi il
              nostro Digital Consultant Andrea che orbita su se stesso.
            </span><br />
          <a>
            <p>Torna alla home</p>
          </a>
          </div>
        </div>
        <div className={`col-lg-5 ${styles.rightImage}`}>
          <img alt="" src={Img} />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
