import React, { Component } from 'react';
import Header from './components/headerComponent/header';
import './Assets/css/default.min.css';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Blog1 from './components/pages/blog1';
import Blog2 from './components/pages/blog2';
import Blog3 from './components/pages/blog3';
import img from './components/headerComponent/imageNew.png';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Header />
      <Route exact path='/' component={Homepage} />
      <Route exact path='/Blog1' component={Blog1} />
      <Route exact path='/Blog2' component={Blog2} />
      <Route exact path='/Blog3' component={Blog3} />

      <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
