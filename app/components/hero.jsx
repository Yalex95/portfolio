import { Link } from "@remix-run/react";

const Hero = () => {
  return (
    <div id="hero" className="">
      <div className="container text-center ">
        <div className="row justify-content-center">
          <div className="col-6">
            <h3>Yeris Alejandra Aguilar - FRONT END </h3>
            <h1>WEB DEVELOPER</h1>
            <p>
              Hello! I'm Yeris, a passionate front-end web developer with a
              knack for crafting captivating online experiences.{" "}
              <span>Contact me today</span>, and let's create something
              extraordinary together.
            </p>
            <div className="d-flex justify-content-center contact-container">
              <Link to="#contact" className="btn contact">
                Contact
              </Link>
              <p className="click-here">Click Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
