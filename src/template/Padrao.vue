<template>
  <div>
    <b-navbar sticky="true" toggleable="lg" type="dark" variant="primary">
      <b-img src="img/logo/logo1.png" width="35" height="35" class="mr-2 ml-4"></b-img>
      <b-navbar-brand to="/home">Radical Dreamers</b-navbar-brand>

      <b-navbar-nav class="ml-auto mr-4">
        <b-nav-item to="/home">Home</b-nav-item>
        <b-nav-item to="/games">Games</b-nav-item>
        <b-nav-item to="/noticias">Notícias</b-nav-item>
        <b-nav-item to="/sobre">Sobre</b-nav-item>
        <b-nav-item to="/contato">Contato</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <router-view />

    <footer class="footer-container">
      <div class="content-left">
        <img src="img/logo/logo1.png" width="75" class="mr-4">
        <a href="#">Política de privacidade</a>
      </div>

      <div class="content-right">
        <a href=""><img src="img/svg/insta.svg"></a>
        <a href=""><img src="img/svg/twitter.svg"></a>
        <a href=""><img src="img/svg/github.svg"></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-container a {
    color: #1a1a1a;
    font-size: 20px;
  }

  .content-right img {
    width: 38px;
    margin-right: 20px;
  }
</style>
