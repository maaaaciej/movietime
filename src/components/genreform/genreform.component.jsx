import React from "react";
import Slider from "react-rangeslider";

import "react-rangeslider/lib/index.css";
import "./genreform.styles.scss";

const GenreForm = () => {
  return (
    <div className="genreform">
      <div className="genreform-sliders">
        <span className="genreform-sliders-text">Min. IMDb rating</span>
        <input type="range" min="1" max="100" />
      </div>
      <div className="genreform-sliders">
        <span className="genreform-sliders-text">Released between</span>
        <input type="number" />
        <span>and</span> <input type="number" />
      </div>
    </div>
  );
};

export default GenreForm;
