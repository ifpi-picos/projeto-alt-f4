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

    <footer class="container-fluid pt-4 pb-4">
      <img src="img/logo/logo1.png" width="100">
      <h4 class="text-dark">@radicaldreamers</h4>
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
