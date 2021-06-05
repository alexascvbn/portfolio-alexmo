import React from "react";
import author from "../LinkIn_Photo.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-3">
            <img src={author} alt="author..." className="profile-img" />
          </div>
        </div>
        <div className="col-lg-6 col xm-12 ">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello, My name is Mo Hoi Lung. You can just call me by my English
            name, Alex.
            <br /> I am graduated from IVE with a Higher diploma in software
            engineering and experience with Java, Kotlin, SQL datanase HTML, CSS
            and JavaScript. During my studies, I have completed the final-year
            project with E-commerce car parts app. It is good practice which has
            strengthened my coding skills, team spirit with my classmates in
            understanding client’s needs, programing structures and application
            UI design. <br />
            Besides, I have worked in iAsia Online Systems Limited which handle
            the react native mobile apps. It is my starting point to realize the
            advantages of react.js or react native.
            <br />
            Then, on the way of job searching, I would like to do more exercises
            to enhance my coding sense and skills. I am studied the online
            course from mosh and following him step by step to make the real
            react native app project, Finally, I am looking the new jobs and
            further to contribute my coding skill and experience. Thank you for
            your listening.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
