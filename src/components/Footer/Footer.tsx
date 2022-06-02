import { FaInstagram } from "react-icons/fa";
import { FooterStyles } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterStyles className="container">
      <footer>
        <section className="ft-main">
          <div className="ft-main-item">
            <img src="images/columpia.png" alt="logo columpia" />

            <p>
              Columpia is a website built to make everyones live easier, making
              faster and easier one family day plan. You coul search for the
              best playground in your city or the closest to you. Hope you enjoy
              it as the children are going to enjoy in the playground.
            </p>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Columpia</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>FAQs</li>
              <li>Teams</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Stay Updated</h2>
            <p>Subscribe to our newsletter to get our latest parks.</p>
            <form>
              <input
                autoComplete="off"
                type="email"
                name="email"
                placeholder="Enter email address"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </section>
        <section className="ft-social">
          <ul className="ft-social-list">
            <li>
              <FaInstagram className="fab fa-instagram" />
            </li>
          </ul>
        </section>

        <section className="ft-legal">
          <ul className="ft-legal-list">
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
            <li>&copy; 2022 Copyright Columpia</li>
          </ul>
        </section>
      </footer>
    </FooterStyles>
  );
};

export default Footer;
