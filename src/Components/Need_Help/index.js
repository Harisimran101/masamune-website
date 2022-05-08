import React from "react";
import styles from "./style.module.scss";

const NeedHelp = (props) => {
  return (
    <div className={`container ${styles.mainDiv}`}>
      <div className="row mx-0">
        <div className="col-lg-12 text-center">
          <div className={styles.textHeading}>
            <h2>Ciao</h2>
            <h1>the visual form of a document or a typeface without relying on meaningful content. </h1>
            <p>the visual form of a document or a typeface without relying on meaningful content. the visual form of a document or a typeface without relying on meaningful content. 
            the visual form of a document or a typeface without relying on meaningful content. 
            the visual form of a document or a typeface without relying on meaningful content. 
            </p>
            <button>Continou</button> <a>premi Enter!</a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
