import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import codimg from './codimg.jpg';

class Blog3 extends Component {
  render() {
    return (

      <div class="row">
      <homePage>
        <div className = "container-fluid" class="col-md-10">
        <br />
        <p><h2><center><b>Call of Duty: WWII Review  -  Rating: 9/10</b></center></h2></p><br /><br />
        <img src={codimg} alt="COD LOGO" width = "500 px" height = "300 px" align="right"/>
        <p><h5>Date: 11/13/17</h5></p>

        <p>
        Call of Duty’s return to World War II is surprisingly a fast-paced take on the classic setting. It provides for a good campaign, a great new mode in multiplayer among other good changes, and a creepier, dense version of Nazi Zombies. However, each core part of Call of Duty: WW2 is marred by inconsistencies and minor flaws that hold it back &nbsp; from being a landmark in the series. Still, it’s a solid Call of Duty game and I’ve enjoyed the many hours I’ve already poured into it.
        </p>
        <p>
        The campaign - my personal custom is to skip a Call of Duty campaign and jump &nbsp;straight into the multiplayer, this year I was happy to start Call of Duty: WW2 with this very personal-feeling but typical war story. The campaign, which follows Private “Red” Daniels through pivotal moments like D-Day (of course) and the liberation of Paris, is good primer for what’s to come. It shows how well Call of Duty’s combat adjusts back into a historical setting for the first time since 2008’s World at War, and, more importantly, tells a good story with some fun action movie-style spectacle.
        </p><p>
        Multiplayer - Though you can’t use consumables in Local Play for whatever reason, having everything unlocked there made me want to play online less. It makes for a good testing ground, though. Queuing alone online isn’t ideal either. Unless your entire team has mics, there isn’t a viable way to call out important things, which is detrimental to a mode that requires communication for success. The best I could do with a team new to Nazi Zombies was jump wildly and shoot at important objectives until someone did something to help. If you plan on seriously playing this, find yourself a team that can communicate.

        </p><p>
        Whether you’re crawling through the trenches in the campaign’s D-Day landing, fighting on the competitive battlefields, or lopping off gruesome undead soldiers’ heads in Nazi Zombies, Call of Duty: WW2 offers a surprisingly fast-paced and fun World War II experience. The campaign features a more personal story, while the new War multiplayer mode alleviates some of my frustrations with the generally small multiplayer maps. Of all the parts, though, Nazi Zombies is a standout with its wonderfully creepy setting and puzzle-like tasks. It’s mostly what you’d expect from a great Call of Duty game, and a near-miss for a spot in the lineup of top Call of Duty games.
        </p>

      </div>
      </homePage>
      <div id="newDiv" className = "container-fluid" class="col-md-2">
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
export default Blog3;
