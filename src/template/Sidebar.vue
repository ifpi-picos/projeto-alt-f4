<template>
  <div>
    <img
      style="position: absolute; outline: none; margin: 10px"
      v-b-toggle.sidebar-backdrop
      width="25px"
      src="icons/menu-hamburger.svg"
    />

    <b-sidebar id="sidebar-backdrop" title="Radical Dreamers" backdrop shadow>
      <botao-link to="/home-admin" nomeLink="Home Admin"></botao-link>
      <botao-link to="/cadastro-noticia" nomeLink="Adicionar Notícia"></botao-link>
      <b-button class="logout border-0" @click="logout"><span>Logout</span></b-button>
    </b-sidebar>

    <router-view /> 
  </div>
</template>

<script>
import BotaoLink from '../components/BotaoLink.vue'
// import firebase from 'firebase/app'

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
          console.log('logout com sucesso')

          this.$router.push('login')
        })
        .catch(function (error) {
          console.error(error)
        })
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
