import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <span className="footer-text">
        2020 -{" "}
        <a className="footer-text-link" href="https://github.com/maaaaciej">
          Maciej Ostrowski
        </a>
      </span>
    </div>
  );
};

export default Footer;
