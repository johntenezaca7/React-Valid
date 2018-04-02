import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Landing from "./Landing";

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Route exact path="/" component={props => <Landing />} />
    </div>
  </Provider>
);

export default App;
