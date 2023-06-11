import classes from "./Footer.module.css";
import logo from "../images/footer-logo.png";
import location from "../images/location.svg";
import mail from "../images/mail.svg";
import CallIcon from "../images/call.jsx";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-container"]}>
        <img className={classes["footer-logo"]} src={logo} alt="logo" />
        <div className={classes.row}>
          <div>
            <p style={{ marginTop: 0 }}>
              OurStudio is a digital agency UI / UX Design and Website
              Development located in Ohio, United States of America
            </p>
            <br />
            <br />
            <p>Copyright Tanah Air Studio</p>
          </div>
          <div>
            <b>Our Social Media</b>
            <ul>
              <li>facebook</li>
              <br />
              <li>Twitter</li>
              <br />
              <li>Instagram</li>
              <br />
              <li>Youtube</li>
            </ul>
          </div>
          <div>
            <b>Contact</b>
            <ul>
              <li>
                <span>
                  <img src={location} alt="" />
                </span>
                &nbsp; 8819 Ohio St. South Gate, California 90280
              </li>
              <br />
              <li>
                <a href="mailto:ourstudio@hello.com">
                  <span>
                    <img src={mail} alt="" />
                  </span>
                  &nbsp; ourstudio@hello.com
                </a>
              </li>
              <br />
              <li>
                <a href="+2713866473637">
                  <CallIcon />
                  &nbsp; +271 386-647-3637
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
