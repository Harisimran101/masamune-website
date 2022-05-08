import React from "react";
import styles from "./style.module.scss"

const TopPage = (props) => {
  let page = window.location.href;
  let home = page.split("/");
  let HomePage = home[3];
  return (
      <div className={`${styles.mainDiv}`}>
    <div className="row mx-0">
      <div className="col-lg-7">
      <div data-aos="fade-right">
        <div className={styles.textImage}>
        {HomePage === "careers" ? <span>Work <br/> with us.</span>:
          (
            <span>Cutting-edge Digital Creative Studio</span>
          )
          }
          
          {HomePage === "magazine" ? "":
          (
            <img alt="" src={props.img} />
          )
          }
        </div>
      </div>
      </div>
      <div className={`col-lg-5 ${styles.rightImage}`}>
      <div data-aos="fade-down">
      <img alt="" src={props.img2} />
      </div>
      </div>
    </div>
      </div>
  );
};

export default TopPage;
