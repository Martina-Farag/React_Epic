import { Link } from "react-router-dom";
import FooterLink from "../../components/FooterLink/FooterLink";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container logo-col">
        <div className="d-flex justify-content-between">
          <ul className="social-links">
            <li>
              <Link className="footer-link" to="/#">
                <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/#">
                <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/#">
                <ion-icon class="social-icon" name="logo-youtube"></ion-icon>
              </Link>
            </li>
          </ul>

          <Link to="/#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="icon w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
      <h5 className="container text-secondary text-start fs-3 px-5 my-5">
        Resources
      </h5>
      <div className="container grid grid--footer">
        <nav className="nav-col">
          <ul className="footer-nav">
            <FooterLink title="Support-A-Creator" />
            <FooterLink title="Distribute on Epic Games" />
            <FooterLink title="Careers" />
            <FooterLink title="Company" />
          </ul>
        </nav>

        <nav className="nav-col">
          <ul className="footer-nav">
            <FooterLink title="Fan Art Policy" />
            <FooterLink title="UX Research" />
            <FooterLink title="Store EULA" />
          </ul>
        </nav>

        <nav className="nav-col">
          <ul className="footer-nav">
            <FooterLink title="Online Services" />
            <FooterLink title="Community Rules" />
            <FooterLink title="Epic Newsroom" />
          </ul>
        </nav>
      </div>

      <h5 className="container text-secondary text-start fs-3 px-5 my-5">
        Made By Epic Games
      </h5>
      <div className="container grid grid--footer">
        <nav className="nav-col">
          <ul className="footer-nav">
            <FooterLink title="Battle Breakers" />
            <FooterLink title="Fortnite" />
            <FooterLink title="Infinity Blades" />
          </ul>
        </nav>

        <nav className="nav-col">
          <ul className="footer-nav">
            <FooterLink title="Robo Recall" />
            <FooterLink title="Shadow Complex" />
            <FooterLink title="Unreal Tournament" />
          </ul>
        </nav>
      </div>

      <div className="container divider mt-3 mb-5"></div>

      <p className="container copyright grid">
        Copyright &copy;2023, Epic Games, Inc. All rights reserved. Epic, Epic
        Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal
        Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal
        Tournament logo are trademarks or registered trademarks of Epic Games,
        Inc. in the United States of America and elsewhere. Other brands or
        product names are the trademarks of their respective owners.
      </p>

      <div className="container grid grid--footer-sm-spacing mt-5">
        <nav className="nav-col">
          <ul className="footer-nav">
            <FooterLink title="Terms of Service" />
          </ul>
        </nav>
        <nav className="nav-col">
          <ul className="footer-nav">
            <FooterLink title="Privacy Policy" />
          </ul>
        </nav>
        <nav className="nav-col">
          <ul className="footer-nav">
            <FooterLink title="Store Refund Policy" />
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
