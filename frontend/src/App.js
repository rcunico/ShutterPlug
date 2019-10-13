import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layout/Header";
import CreateArtistProfile from "./components/profiles/CreateArtistProfile";
import SearchArtist from "./components/search/SearchArtist";
import CreateClientProfile from "./components/profiles/CreateClientProfile";
import ArtistCard from "./components/profiles/ArtistCard";
import Register from "./components/profiles/Register";
import Login from "./components/profiles/Login";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/search" component={SearchArtist} />
              <Route exact path="/exampleSearch" component={ArtistCard} />
              <Route
                exact
                path="/profile/createClient"
                component={CreateClientProfile}
              />
              <Route
                exact
                path="/profile/createArtist"
                component={CreateArtistProfile}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
