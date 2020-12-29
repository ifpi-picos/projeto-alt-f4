<template>
  <div class="container-body">
    <b-card class="container">
      <b-form @submit.prevent="Login">
        <h1 class="card-title text-center mb-4 mt-3" style="font-weight: 700;">
          Radical Dreamers
        </h1>

        <b-input-group class="mb-4">
          <b-form-input
            v-model="email"
            type="email"
            required
            placeholder="E-mail"
            class="border-input"
            style="height: 45px"
          ></b-form-input>
        </b-input-group>

        <b-input-group class="mb-0">
          <b-form-input
            v-model="senha"
            type="password"
            required
            placeholder="Senha"
            class="border-input"
            style="height: 45px"
          ></b-form-input>
        </b-input-group>

        <div class="mb-4">
          <b-link
            href="#"
            style="font-size: 12px; font-weight: 700; color: #818181"
            >ESQUECEU A SENHA?</b-link
          >
        </div>

        <b-button
          type="submit"
          class="mb-3"
          block
          pill
          variant="primary"
          style="height: 43px; font-weight: 600"
          >LOGIN</b-button
        >
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      email: '',
      senha: ''
    }
  },
  methods: {
    async Login () {
      const { email, senha } = this

      try {
        const res = await this.$firebase.auth().signInWithEmailAndPassword(email, senha)

        this.$router.replace('home-admin')
      } catch (error) {
        console.log(error)
        
        alert('USUÁRIO NÃO ENCONTRADO')
      }

    }
  }
}
</script>

<style scoped>
.container-body {
  width: 100vw;
  height: 100vh;
  background: #3b56bf;

  display: flex;
  justify-content: center;
  align-items: center;
}

.border-input {
  border-radius: 10px;
}

.card {
  width: 35%;
  border-radius: 30px;
}
</style>
