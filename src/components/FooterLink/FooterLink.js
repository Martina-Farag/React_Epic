import React from "react";

const FooterLink = (props) => {
  return (
    <li>
      <a className="footer-link" href="/#">
        {props.title}
      </a>
    </li>
  );
};

export default FooterLink;
