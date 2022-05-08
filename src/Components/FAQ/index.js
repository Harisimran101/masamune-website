import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "./style.css";
import img from "../../Assets/media/images/about-page/2.jpg";

let page = window.location.href;
let home = page.split("/");
let HomePage = home[3];

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },

    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const styles = {
  bgColor: "white",
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "black",
  arrowColor: "black",
};

const config = {
  animate: true,
  tabFocus: true,
};

export default function App() {
  return (
    <div className="faq-main">
      <div className="container">
        <div className="row">
          {HomePage === "careers" ? (
            ""
          ) : (
            <>
              <div className="col-lg-12 text-center">
                <h4 className="faq-head">People of Masamune</h4>
              </div>
              <div className="col-lg-5 faq-image">
                <div
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <img alt="" src={img} />
                </div>
              </div>
            </>
          )}
          <div className="col-lg-7 FAQ">
            <Faq data={data} styles={styles} config={config} />
          </div>
        </div>
      </div>
    </div>
  );
}
