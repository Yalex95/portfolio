import { Link } from "@remix-run/react";

const Hero = () => {
  return (
    <div id="hero" className="">
      <div className="container text-center ">
        <div className="col-10 m-auto">
            
        <h3>Yeris Alejandra Aguilar - </h3>
        <h1>WEB DEVELOPER</h1>
        <p>
          Hello! I'm Yeris, a passionate front-end web developer with a knack
          for crafting captivating online experiences. <span>Contact me today</span>, and
          let's create something extraordinary together.
        </p>
        <div className="flex m-auto">
          <Link to="#contact" className="btn contact">
            Contact
          </Link>
          <p>Click Here</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;