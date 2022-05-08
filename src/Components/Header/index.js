import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./style.module.scss";
import Header from "./header.jsx"
import Logo from "../../Assets/media/icons/logo-masamune-full-white.svg"
import smallLogo from "../../Assets/media/icons/logo-masamune-small-white.svg"
import navImage from "../../Assets/media/images/home-page/1.jpg"
import navImage2 from "../../Assets/media/images/home-page/2.jpg"
import navImage3 from "../../Assets/media/images/home-page/3.jpg"

// const { Header } = Layout;

const HeaderPage = () => {
  const [state, setState] = useState(false);
  const sidemenu = () => {
    if (state) {
      setState(false);
    }
    if (!state) {
      setState(true);
    }
  };
  const handleClick = ()=>{
    setState(false);
  }
  return (
    <div className={`px-5 ${styles.header}`}>
      <nav class="navbar navbar-expand-lg navbar-dark p-2 header-nav">
        <div>
          <Link to="/" onClick={handleClick}>
            <img alt="" src={Logo} className={styles.img}/>
            </Link>
            <div className="d-sm-block d-md-none d-xl-none">
            <Link to="/" onClick={handleClick}>
            <img alt="" src={smallLogo} />
            </Link>
              </div>
          <button
            onClick={sidemenu}
            className={styles.button}
            type="button"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {state && <Header navImage={navImage} navImage2={navImage2} navImage3={navImage3} setState={setState} state={state}/>}
        </div>
      </nav>
    </div>
  );
};

export default HeaderPage;
