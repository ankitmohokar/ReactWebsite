import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import img from './image.png';

class Header extends Component {
  render() {
    return (
      <header>
      <div className="logo" background = "#000000">
        <Link to="/"><img src={img} alt="EA LOGO" width = "80 px" height = "80 px" /> <b>Reviews</b></Link>
      </div>

      </header>
    );
  }
}

export default Header;
