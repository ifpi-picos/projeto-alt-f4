<template>
  <div>
    <img
      style="position: absolute; outline: none; margin: 10px"
      v-b-toggle.sidebar-backdrop
      src="icons/menu-hamburger-1.svg"
      width="25px"
    />

    <b-sidebar id="sidebar-backdrop" title="Radical Dreamers" backdrop shadow >
      <botao-link to="/login" nomeLink="Login"></botao-link>
      <botao-link to="/admin" nomeLink="Admin"></botao-link>
      <botao-link to="/home" nomeLink="Home"></botao-link>
    </b-sidebar>

    <router-view />
  </div>
</template>

<script>
import BotaoLink from '../components/BotaoLink.vue'

export default {
  components: {
    BotaoLink
  },
  data: {
    return: {}
  }
}
</script>
