import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './Component/Header/Header';
// import Category from './Component/Category/Category';
import Footer from './Component/Footer/Footer';
import routes from './routes';
import backgroundImg from './images/midlayers.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="header">
          <Header />
        </div>
        
        <div>
            <img className="midlayers-img"src={backgroundImg} alt="background images"/> 
        </div>

        {/* <div className="category">
          <Category />
        </div> */}

        {routes}

        <div className="footer">
          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
