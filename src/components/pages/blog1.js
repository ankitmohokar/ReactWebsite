import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import fifaimg from './fifaimg.jpg';

class Blog1 extends Component {
  render() {
    return (

      <div class="row">
      <homePage>
        <div className = "container-fluid" class="col-md-10">
        <br />
        <p><h2><center><b>FIFA 18 Review  -  Rating: 9/10</b></center></h2></p><br /><br />

        <img src={fifaimg} alt="FIFA LOGO" width = "500 px" height = "300 px" align="right"/>
        <p><h5>Date: 11/16/17</h5></p>
        <p>
        FIFA 18 feels like a breakthrough, even if it’s still largely a refinement of things the &nbsp; series has done well through most of this console generation.

        Once again, much of the flash year’s game is in the story mode, a sequel to last year’s debut of “The Journey.” But   &nbsp; there is so much gameplay in the second act for hero Alex Hunter that FIFA 18’s subtler improvements come to the fore and invite the player to enjoy the rest of a very deep game.
        </p><p>
        Dribbling mechanics and animations may not be the sexiest pitch, but longtime users know that pace has been an issue in the FIFA series. The slower turns and acceleration of years past have been groomed out for the most part, though I had to be mindful of overrunning the play thanks to this newfound responsiveness. But I felt able to burst past defenders without having to use special moves, and stay ahead of them on runs upfield instead of passing the ball in a panic.
        </p><p>
        First touches feel a little softer, which means even if standard passing still lacks crispness, maintaining possession is easier, provided the ball can get there fast enough. The driven-through pass, a shoulder-button modified pass introduced a couple of editions ago, became a standard move for me. Fortunately, players are much better equipped to receive it than in past years.

        </p>
        <p>

But FIFA 18 is still seductively deep and delivers excitement. It gave me the feeling that there is still so much to learn about what appears to be a rather straightforward sport, and that the game would gladly help me understand. This is always the time of year when I ask myself why I don’t just spend all of my time playing FIFA, and FIFA 18 poses the question more forcefully than ever.
        </p>

      </div>
      </homePage>
      <div id="newDiv" className = "container-fluid" class="col-md-2" >
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
export default Blog1;
