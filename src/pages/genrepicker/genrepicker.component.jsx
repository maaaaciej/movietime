import React from "react";

import GenreForm from "../../components/genreform/genreform.component";
import GenreBubble from "../../components/genrebubble/genrebubble.component";

import "./genrepicker.styles.scss";

const GenrePicker = () => {
  return (
    <div className="genrepicker">
      GenrePicker
      <GenreForm />
      <GenreBubble />
    </div>
  );
};

export default GenrePicker;
