import React from "react";

import MovieCard from "../../components/moviecard/moviecard.component";

import "./moviefeed.styles.scss";

const MovieFeed = () => {
  return (
    <div className="moviefeed">
      MovieFeed <MovieCard />
    </div>
  );
};

export default MovieFeed;
