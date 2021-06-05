import React from "react";
import { Link } from "react-scroll";
// import Typed from "react-typed";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>Web development and websites promotions</h1>
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
          to="contacts"
          offset={-110}
          href="#"
          className="btn-main-offer"
        >
          contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
