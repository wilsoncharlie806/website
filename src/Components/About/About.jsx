import React from 'react'
import '../Style/style.css'

export default function About() {
   
  return (
    <header class="header">

      <div class="container">

        <div class="con">
          <div class="fle text">
            <p class="t1" id="br">{"<"}body{">"}</p>  
            <p class="pad1 box2"></p>
            <p class="pad2 box1"></p>
            <p class="pad3 boxb"></p>
          </div>
    
          <div class="fle text">
            <p class="t1 mar" id="bl">{"<"}h1{">"}</p>
            <p class="pad4 box3"></p>
            <p class="pad5 box4"></p>
            <p class="pad6 boxb"></p>
          </div>
    
          <div class="fle mar">
            <h1 class="t2 btn">H</h1>
            <h1 class="t2 btn">i</h1>
            <h1 class="t2 btn">,</h1>
            <h1 class="t2 btn">&nbsp;</h1>
            <h1 class="t2 btn">I</h1>
            <h1 class="t2 btn">'</h1>
            <h1 class="t2 btn">m</h1>
            <h1 class="t2 btn">&nbsp;</h1>
            <h1 class="t2 btn">A</h1>
            <h1 class="t2 btn">y</h1>
            <h1 class="t2 btn">u</h1>
            <h1 class="t2 btn">s</h1>
            <h1 class="t2 btn">h</h1>
            <h1 class="t2 btn">.</h1>
          </div>
          
          <div class="fle text">
            <p class="t1 mar" id="br">{"</"}h1{">"}</p>
            <p class="pad7 box1"></p>
            <p class="pad8 boxb"></p>
          </div>
    
          <div class="fle text">
            <p class="t1 mar" id="bl">{"<"}p{">"}</p>
            <p class="box4 pad9"></p>
            <p class="boxb pad10"></p>
          </div>
    
          <p class="t3 mar text">
            Passionate and driven IT student with a love for technology and problem-solving. Equipped with a solid foundation in programming and web development.
          </p>

          <div class="fle text">
            <p class="t1 mar" id="pr">{"</"}p{">"}</p>
            <p class="box5 pad11"></p>
            <p class="box4 pad12"></p>
          </div>
    
          <div class="fle text">
            <p class="t1" id="db">{"</"}body{">"}</p>
            <p class="box4 pad14"></p>
            <p class="box2 pad15"></p>
            <p class="boxb pad16"></p>
          </div>          
        </div>

        <div class="headimg">

          <div class="fle right">
            <p class="t1" id="bl">{"<"}img{">"}</p>
            <p class="box5 pad7"></p>
            <p class="box4 pad5"></p>
            <p class="boxb pad17"></p>
          </div>

          <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_ghs9bkkc.json" class="right" alt="profilePhoto"  background="transparent"  speed="1"  style={{ width: 400, height: 400 }} loop autoplay></lottie-player>
          
          <br />
          <br />
          <br />
          <br />

          <div class="fle right">
            <p class="boxb pad18"></p>
            <p class="box1 pad12"></p>
            <p class="box3 pad5"></p>
            <p class="t1" id="br">{"</"}img{">"}</p>
          </div>
        </div>

      </div>
      
    </header>
  );
}