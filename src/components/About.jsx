import React from 'react';
import hacker from "../images/about/hacker2.png";
import text from "../images/about/text.svg";

// import aboutImg from "../src/images/about/frontend.jpg"

function About(props) {
  return (
      <>
        <div className="about" id="about">
          <div className="container">
            <div className="about__inner">
              <div className="about__img">
                <img src={hacker} alt=""/>
                <img src={text} alt=""/>
              </div>
              <div className="about__content">
                <h2 className="about__title">
                  ABOUT ME
                </h2>
                <h3 className="about__subtitle">
                  A dedicated Full Stack Developer
                  based in Russia, Melitopol. 📍
                </h3>
                <p className="about__paragraph">
                  As a Full Stack Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript,
                  React, etc. I excel in designing and maintaining responsive websites that offer a smooth user
                  experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and
                  optimized code and utilizing cutting-edge development tools and techniques. I am also a team player
                  who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default About;