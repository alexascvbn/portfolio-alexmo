import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>city Mocow Main st 2020 office #223</p>
            </div>
            <div className="d-flex">
              <a href="tel:65028155">65028155</a>
            </div>
            <div className="d-flex">
              <p>alexascvbn@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-msm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">Aobut Me</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portlolio</a>
                <br />
                <a className="footer-nav">Contants</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"www.youtube.com"}
                quote={"FrontEnd Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"www.youtube.com"}
                quote={"FrontEnd Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"www.youtube.com"}
                quote={"FrontEnd Developer"}
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"www.youtube.com"}
                qu ote={"FrontEnd Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Alex Mo | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
