import Navigation from "./navigation";
import icon from "~/assets/world-icon.svg";
import { Link} from "@remix-run/react"


const Header = () => {
  return (
    <header>
      <div className="header">
        
      <Navigation />
      {/* <Link to="#contact" className="btn contact">
        Contact
      </Link> */}
      <div className="language">
        <img src={icon} alt="world" className="icon" />
        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider round">
            <div className="language-selection">
              <div>ES</div>
              <div>EN</div>
            </div>
          </span>
        </label>
      </div>
      </div>
    </header>
  );
};

export default Header;
