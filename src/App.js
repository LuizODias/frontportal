import React, { Component } from 'react';
import './css/bootstrap/css/bootstrap.css';
import './fontawesome/css/all.min.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';


class App extends Component {

  render() {
    return (
      <div className="body">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
