import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
// import Category from './Component/Category/Category';
import Footer from './Component/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="header">
          <Header />
        </div>

        {/* <div className="category">
          <Category />
        </div> */}

        {/* <div className="footer">
          <Footer />
        </div> */}

      </div>
    );
  }
}

export default App;
