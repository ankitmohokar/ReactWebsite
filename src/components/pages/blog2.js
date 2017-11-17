import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import nfsimg from './nfsimg.png';

class Blog2 extends Component {
  render() {
    return (

      <div class="row">
      <homePage>
        <div className = "container-fluid" class="col-md-10">
        <br />
        <p><h2><center><b>Need For Speed - Payback Review  -  Rating: 7/10</b></center></h2></p><br /><br />

        <img src={nfsimg} alt="NFS LOGO" width = "500 px" height = "300 px" align="right"/>
        <p><h5>Date: 11/14/17</h5></p>
        <p>
        It’s hard being Need For Speed in these modern times. The old staples that once ensured a Christmas chart-topping release—puke green Skylines out-NOSing each &nbsp; other to the finish line—have drifted out of contemporary appeal in the wake of blockbuster simcade titles. 2015’s series reboot didn’t set the 23-year-old franchise on track, and sadly nor has this much more ambitious effort from Ghost Games.

        </p>
        <p>
        The problems begin with the esteem Need For Speed Payback holds the Fast and Furious franchise in. After all, if Vin Diesel one liner-ing his way through wafer-thin scripts about cars driving through skyscrapers makes for a box office smash, why can’t game appeal to that same appetite? Everything about Payback—the quasi-Vegas  &nbsp; setting Fortune City; the revenge plot; the love for tuners getting airborne, smashing things—harks back to those movies. Those movies which, famously, exist on a precarious ‘so bad it’s good’ appeal hanging above every set-piece like the sword of Damocles.
        </p><p>
        On a GTX 1070 and i5 6500 running at 2560x1600, Payback can’t quite keep to 60fps at ultra settings, so some degree of graphics settings adjustment is required to hit that smooth v-synced frame delivery. The range of ten options is modest but enough to dial in an acceptable fidelity/performance balance on most systems, and but the engine seems prone to frame drops and slow downs on all settings. These drops, and the occasional car you drive right though in the game world, suggest a less than stellar technical foundation.
        </p><p>
        What Payback does well is what the series has always excelled at: satisfying arcade handling and a sense of speed. The exterior view’s camera sells you a sense of danger and being on the edge of control, and simply being in control of a car feels weighty and compelling. Then there are Side Bets, a tonally consistent new mechanic which throws in added objectives each race and alleviate the sense of repetition. Unfortunately they can’t compensate for the structural and narrative missteps which feel more grating the longer you play, until eventually the breezy powerslides and 150mph overtakes simply aren’t enough anymore.
        </p>

      </div>
      </homePage>
      <div id="newDiv"className = "container-fluid" class="col-md-2">
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
export default Blog2;
