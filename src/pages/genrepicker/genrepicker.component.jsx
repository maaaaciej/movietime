import React from "react";

import GenreForm from "../../components/genreform/genreform.component";
import GenreBubble from "../../components/genrebubble/genrebubble.component";

import { genres } from "../../static/genres";

import "./genrepicker.styles.scss";

const GenrePicker = () => {
  return (
    <div className="genrepicker">
      <h1 className="genrepicker-title">What are you in the mood for?</h1>
      <GenreForm />
      <div className="genrepicker-grid">
        {genres.map((genre) => (
          <GenreBubble genre={genre} key={genre} />
        ))}
      </div>
      <button>Show Recommendations</button>
    </div>
  );
};

export default GenrePicker;
