import { Link } from "@remix-run/react";
import Navigation from "./navigation";
import icon from '~/assets/react-icon.svg'
const Footer = () => {
  return (
    <footer>
      <div className="container grid">
        <div>
          {/*  */}
          <p className="uppercase">Front End web Developer</p>
          <p className="uppercase text-bold">Yeris Alejandra Aguilar</p>
          <p>Tijuana, MX</p>
          <div></div>
        </div>
        <div>
            <Navigation/>
        </div>
        <div className="text-center">
          <p className="text-bold">Get Started<span className="uppercase"> TODAY!</span></p>
          <Link to="#contact" className="btn contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="social-media">
        <div className="media-links">
          <ul>
            <li>
              <img src={icon} alt="LinkedIn" />
            </li>
            <li>
              <img src={icon} alt="Email" />
            </li>
            <li>
              <img src={icon} alt="Phone" />
            </li>
            <li>
              <img src={icon} alt="GitHub" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
