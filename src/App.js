import React, { Component } from 'react';
import Header from "./components/layout/Header.js";
import Footer from "./components/layout/Footer.js";

export default class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <Header />
      <main className="mdl-layout__content">
      {this.props.children}</main>
      </div>
    );
  }
}
