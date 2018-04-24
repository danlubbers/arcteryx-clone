import React, { Component } from 'react';
import './reset.css';
import './App.css';
import routes from './routes';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">

      <div className="header">
                <Header />
            </div>

        {routes}

        <div className="footer">
                 <Footer />
            </div>

      </div>
      
    );
  }
}

export default App;
