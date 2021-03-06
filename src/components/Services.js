import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my services </h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web Degin</h3>
              <p>
                I would like contribute my web programing language(HTML, CSS
                ,JavaScript) in the jobs and always focus on the result.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Mobile Application</h3>
              <p>
                React Native or Java/Kotlin are used to build the amazing app.
              </p>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faFacebookF}
                  size="2x"
                />
              </div>
              <h3>Facebook Ads SMM</h3>
              <p>
                You potential clients well see your services or product on
                Facebook
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
              </div>
              <h3>Google Ads</h3>
              <p>
                Your service or produt will appear at the top of the Google
                search
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
