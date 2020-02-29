import React from "react";
import { Route, Switch } from "react-router-dom";

import "./app.scss";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInUpPage from "./pages/SignInUpPage/SignInSignUpPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInUpPage} />
      </Switch>
    </div>
  );
}

export default App;
