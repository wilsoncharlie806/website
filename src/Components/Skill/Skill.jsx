import React from "react";
import { useEffect } from "react";
import TagCloud from "TagCloud";
import "../Style/style.css"

export default function Skill() {

  useEffect(() => {
    return () => {
      const container = '.tagcloud';
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Vue",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
      ];

      const options = {
        radius: 200,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <header class="header">
      <div class="container">
        <div class="con">
          <div class="fle text">
            <p class="t1" id="br">
              &lt;body&gt;
            </p>
            <p class="pad1 box2"></p>
            <p class="pad2 box1"></p>
            <p class="pad3 boxb"></p>
          </div>

          <div class="fle text">
            <p class="t1 mar" id="bl">
              &lt;h1&gt;
            </p>
            <p class="pad4 box3"></p>
            <p class="pad5 box4"></p>
            <p class="pad6 boxb"></p>
          </div>

          <div class="fle mar">
            <h1 class="t2 btn">S</h1>
            <h1 class="t2 btn">k</h1>
            <h1 class="t2 btn">i</h1>
            <h1 class="t2 btn">l</h1>
            <h1 class="t2 btn">l</h1>
            <h1 class="t2 btn">s</h1>
          </div>

          <div class="fle text">
            <p class="t1 mar" id="br">
              {"</"}h1&gt;
            </p>
            <p class="pad7 box1"></p>
            <p class="pad8 boxb"></p>
          </div>

          <div class="fle text">
            <p class="t1 mar" id="bl">
              &lt;p&gt;
            </p>
            <p class="box4 pad9"></p>
            <p class="boxb pad10"></p>
          </div>

          <p class="t3 mar text">
          My skills are wideranging, spanning across multiple creative, and technical disciplines. I absorb information like a sponge and I'm in constant pursuit of skills that can help develop me into a well rounded professional.
          </p>

          <div class="fle text">
            <p class="t1 mar" id="pr">
              {"</"}p&gt;
            </p>
            <p class="box5 pad11"></p>
            <p class="box4 pad12"></p>
          </div>

          <div class="fle text">
            <p class="t1" id="db">
              {"</"}body&gt;
            </p>
            <p class="box4 pad14"></p>
            <p class="box2 pad15"></p>
            <p class="boxb pad16"></p>
          </div>
        </div>

        <div class="headimg">
          <div class="fle right">
            <p class="t1" id="bl">
              &lt;canvas&gt;
            </p>
            <p class="box5 pad7"></p>
            <p class="box4 pad5"></p>
            <p class="boxb pad17"></p>
          </div>

          <span className="tagcloud t1 right" style={{ color: '#1ceded' }}></span>

          <div class="fle right">
            <p class="boxb pad18"></p>
            <p class="box1 pad12"></p>
            <p class="box3 pad5"></p>
            <p class="t1" id="br" style={{ marginLeft: "10px" }}>
              {"</"}canvas&gt;
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
