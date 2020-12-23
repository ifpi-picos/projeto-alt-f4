<template>
  <div>
    <img
      style="position: absolute; outline: none; margin: 10px"
      v-b-toggle.sidebar-backdrop
      src="icons/menu-hamburger.svg"
      width="25px"
    />

    <b-sidebar id="sidebar-backdrop" title="Radical Dreamers" backdrop shadow>
      <botao-link to="/admin" nomeLink="Login"></botao-link>
      <botao-link to="/home-admin" nomeLink="Admin"></botao-link>
      <botao-link to="/home" nomeLink="Home"></botao-link>
      <botao-link to="/cadastro-noticia" nomeLink="Adicionar"></botao-link>
      <div
        class="logout"
        @click="logout()"
        ><span>Logout</span></div
      >
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
  methods: {
    logout () {
      this.$firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('Logout com sucesso!')

          this.$router.push('admin')
        })
        .catch((error) => {
          console.error(error)
        }
      )
    }
  }
}
</script>

<style scoped>
  .logout {
    width: 180px;
    height: 30px;
    margin: 20px auto;
    background: #4e97c3;

    color: #fff;
    border-radius: 5px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-dark {
    color: #fff !important; 
  }
</style>