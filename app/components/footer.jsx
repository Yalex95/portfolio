import { Link, Links } from "@remix-run/react";
import Navigation from "./navigation";
import linkedin from '~/assets/linkedIn.svg'
import mail from '~/assets/email.svg'
import phone from '~/assets/phone.svg'
import github from '~/assets/github.svg'
const Footer = () => {
  return (
    <footer>
      <div className="container ">
        <div>
          {/*  */}
          <p className="text-uppercase">Front End web Developer</p>
          <p className="text-uppercase fw-bold">Yeris Alejandra Aguilar</p>
          <p>Tijuana, MX</p>
          <div></div>
        </div>
        <div>
            <Navigation/>
        </div>
        <div className="text-center">
          <p className="fw-bold">Get Started<span className="uppercase"> TODAY!</span></p>
          <Link to="#contact" className="btn contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="social-media">
        <div className="media-links">
          <ul>
            <li>
              <a href='https://www.linkedin.com/in/yeris-aguilar/'><img src={linkedin} alt="LinkedIn" /></a>
            </li>
            <li>
              <a href=''>
              <img src={mail} alt="Email" /></a>
            </li>
            <li>
              <a href=''>
              <img src={phone} alt="Phone" /></a>
            </li>
            <li>
              <a href='https://github.com/Yalex95'>
              <img src={github} alt="GitHub" /></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
