import React from "react";
import aboutPng from "../assets/images/AboutPng.png";
import Aboutcss from "./About.css";
import Tilt from "react-parallax-tilt";

export default function AboutUs() {
  return (
    <>
      <div>
        <div className="container">
          <div className="contact-with-botanist p-4 col-md-10 mx-auto row mt-5">
            {/* <h3 className="my-3">Let's Contact with Botanist </h3> */}
            <section className=" AboutSection col-md-6 ">
              <h4>WHO WE ARE</h4>
              <p className="aboutParagraph mt-3">
                The purpose of Wheat Buddy is to maximize wheat production by
                helping users in early detection of disease in wheat based on
                uploaded image, symptoms, and information on disease by just
                providing name. Also directly connecting users to the
                agriculture experts via email, for consulting on dealing with
                wheat diseases. It contains blogs on latest updates regarding
                disease spreading in wheat.
              </p>
              {/* <button className="btn botanist-btn col-md-4 mt-4">
                Learn More
              </button> */}
            </section>
            <section className="imgSection col-md-6 ">
              <Tilt>
                <img src={aboutPng} alt="image" />
              </Tilt>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
