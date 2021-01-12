import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Rate from "./Rate/Rate";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";

export default class App extends Component {
  render() {
    return (
      <div className="site">
        <Header />
        <div className="container" style={{ height: "100vh" }}>
          <main>
            <Router>
              <Switch>
                <Route exact path="/" component={Rate}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contacts" component={Contacts}></Route>
              </Switch>
            </Router>
          </main>
          <div className="container" id="cookie_info">
            <div className="site-content">
              <div className="well">
                На нашем сайте мы используем cookie для сбора информации
                технического характера.
                <br /> В частности, для персонифицированной работы сайта мы
                обрабатываем IP-адрес региона вашего местоположения.&nbsp;
                <button className="btn btn-primary btn-sm">OK</button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
