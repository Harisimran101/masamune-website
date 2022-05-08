import React from "react";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <div className={`px-5 ${styles.footer}`}>
      <div className="row mx-0">
        <div className="col-lg-12">
          <p>Prossima pagina</p>
        </div>
        <div className="col-lg-12">
          <h1>Next page</h1>
        </div>
        <div className="col-lg-2">
          <ul>
            <li>Link One</li>
            <li>Link Two</li>
            <li>Link Three</li>
          </ul>
        </div>
        <div className="col-lg-2">
          <ul>
            <li>Link One</li>
            <li>Link Two</li>
            <li>Link Three</li>
          </ul>
        </div>
        <div className="col-lg-2">
          <ul>
            <li>Link One</li>
            <li>Link Two</li>
            <li>Link Three</li>
          </ul>
        </div>
        <div className={`col-lg-6 ${styles.copyRight}`}>
          <p>Masamune 2014 - 2021 · All Rights Reserved · P.Iva 05310200877</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
