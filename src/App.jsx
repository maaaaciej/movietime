import React from "react";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import GenrePicker from "./pages/genrepicker/genrepicker.component";
import MovieFeed from "./pages/moviefeed/moviefeed.component";
import MovieLists from "./pages/movielists/movielists.component";

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={GenrePicker} />
        <Route exact path="/feed" component={MovieFeed} />
        <Route exact path="/list" component={MovieLists} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
