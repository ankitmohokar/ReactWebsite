import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import fifahome from './fifahome.jpg';
import nfshome from './nfshome.jpg';
import codhome from './codhome.jpeg';

class Homepage extends Component {
  render() {
    return (

      <div class="row">
      <homePage>
        <div className = "container-fluid" class="col-md-10">
        <br />
        <p><h2><center><b>Welcome to EA Games Review!</b></center></h2></p><br />
        <p>
        <center>Hey! check out the latest review of following gaming titles for PC and PS4</center>
        </p>
        <p>

        <center><Link to="/Blog1"><img src={fifahome} alt="FIFA LOGO" width = "900 px" height = "200 px" /></Link></center>

        </p><p>

        <center><Link to="/Blog2"><img src={nfshome} alt="NFS LOGO" width = "900 px" height = "200 px" /></Link></center>
        </p><p>
        <center><Link to="/Blog3"><img src={codhome} alt="NFS LOGO" width = "900 px" height = "200 px" /></Link></center>
        </p>
        <br />
      </div>
      </homePage>
      <div id="newDiv" className = "navdiv" class="col-md-2">
      <nav>
      <br />
        <ul>
         <li>
          <Link to="/Blog1"> FIFA 18</Link>
         </li><br />
         <li>
          <Link to="/Blog2"> NFS - Payback</Link>
         </li><br />
         <li>
          <Link to="/Blog3"> COD - World War II</Link>
         </li><br />
        </ul>
      </nav>
      </div>
      </div>

    );
  }
}
export default Homepage;
