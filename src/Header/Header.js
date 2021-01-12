import React, { Component } from "react";
import "./Header.css";
import Nav from "../Nav/Nav";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="top-bar animate-dropdown"></div>
        <div className="main-header">
          <div className="container">
            <h1 className="site-title">React.js Currency Converter App</h1>
          </div>
        </div>
        <Nav />
      </header>
    );
  }
}
