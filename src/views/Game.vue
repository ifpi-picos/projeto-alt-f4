<template>
  <div>
    <section class="card-jogos">
      <div class="card">
        <div class="cards" id="LWKaM3Awq6A">
          <a href="games/avelar.html"><img src="img/640x790/AVELAR.png" alt="Avelar CHRONLCLES" /></a>
        </div>
        <div class="cards" id="c_KC_Wek8o8">
          <a href="games/meme.html"><img src="img/640x790/memecardarena.png" alt="Meme Card Arena " /></a>
        </div>
        <div class="cards" id="iNTtq3Dfrp4 ">
          <a href="">
            <img src="img/640x790/Push Trash.png " alt="Push Trash " />
          </a>
        </div>
        <div class="cards" id="G-iebC1r4-Q ">
          <a href="">
            <img src="img/640x790/reborn.png " alt=" Reborn " />
          </a>
        </div>
        <div class="cards" id=" ">
          <a href="">
            <img src="img/640x790/Lendas RPG.png " alt="lendas RPG " />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scoped">
  @font-face {
    font-family: century-gothic;
    src: url("../font/century-gothic.ttf");
  }

  * {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    line-height: 1.5;
    /* background: linear-gradient(to bottom, #90C0DC 50%, #fff) no-repeat; */
  }

  body,
  input,
  textarea {
    font-family: century-gothic;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10vh 70vh 20vh;
    grid-template-areas: "header" "main" "footer";
  }

  header {
    grid-area: header;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
  }

  /* ---- MAIN ---- */

  .title .subtitle {
    font-weight: bold;
  }

  .title {
    font-size: 1.8em;
  }

  .subtitle {
    font-size: 1.2em;
  }

  .principal {
    width: 85vw;
    height: 600px;
    margin: 30px auto 80px;
  }

  .card {
    /*  */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    position: relative;
  }

  .cards img {
    padding: 20px 20px;
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 8%;
  }

  .card-jogos {
    position: relative;
    display: flex;
  }

  .card-jogos button {
    position: absolute;
    bottom: 250px;
    left: 700px;
  }

  /* ---- GAME DESCRIPTION ---- */

  .desc-game {
    height: 100vh;
    text-align: center;
    white-space: wrap;
  }

  .game-content {
    text-align: justify;
  }

  .game-content > ol {
    list-style: none;
    margin: 10px;
  }

  /* ---- VIDEO ---- */

  iframe {
    margin-top: 30px;
  }

  .desc-game p {
    font-size: 1em;
    word-wrap: break-word;
    word-break: keep-all;
  }

  .desc-game ol li {
    margin: 20px;
    list-style: decimal;
    list-style-position: inside;
  }

  /* ---- DOWNLOAD GAME ---- */

  .download-game img {
    width: 50px;
    height: 50px;
    margin: auto;
    display: block;
  }

  .download-game a {
    padding: 5px;
    font-weight: bold;
    color: #4e97c3;
  }

  /* ---- GAME CONTACT ---- */

  .game-contato {
    margin-bottom: 100px;
  }

  .game-contato p {
    margin: 50px 0 30px 0;
    font-weight: bold;
  }

  .game-contato a {
    padding: 5px;
    font-weight: bold;
    padding: 10px;
    background-color: #4e97c3;
    border-radius: 10px;
    margin-top: 50px;
  }
</style>
