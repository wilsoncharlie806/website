import "../Style/style.css";
import React from 'react'

export default function Footer() {
  return (
    <footer class="social">

      <div class="fle text">
        <p class="t1" id="br">{"<"}footer{">"}</p>
        <p class="box1 pad11"></p>
        <p class="box3 pad12"></p>
      </div>

      <div class="link text">
        <a href=""><h2><i class="fa-brands fa-twitter"></i></h2></a>
        <a href=""><h2><i class="fa-brands fa-google"></i></h2></a>
        <a href=""><h2><i class="fa-brands fa-facebook"></i></h2></a>
        <a href=""><h2><i class="fa-brands fa-github"></i></h2></a>
      </div>

      <div class="fle text">
        <p class="t1" id="db">{"</"}footer{">"}</p>
        <p class="box4 pad5"></p>
        <p class="box5 pad12"></p>
        <p class="boxb pad13"></p>
      </div>

    </footer>
  );
}