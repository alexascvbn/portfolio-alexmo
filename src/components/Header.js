import React from "react";
import { Link } from "react-scroll";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <div className="header-intro">
          Hello, I'm <span className="header-nickname"> Alex Mo </span>.
          <br />
          I'm Frontend Developer
        </div>
        <Typed
          className="typed-text"
          strings={[
            "Web Development",
            "Mobile Application",
            "Google Ads",
            "SEO engine",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link
          smooth={true}
          duration={100}
          to="about"
          offset={-110}
          href="#"
          className="btn-main-offer"
        >
          View me more...
        </Link>
      </div>
    </div>
  );
};

export default Header;
