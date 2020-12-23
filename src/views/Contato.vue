<template>
  <div class="conteiner">
    <p class="h5 col-md-6 mr-auto ml-auto text-justify" id="espaco">
      Quer entrar em contato conosco? Preencha o formulário abaixo para me
      enviar uma mensagem e vamos tentar responder para você dentro de 24 horas!
    </p>
    <!-- 
        nome
        email
        numero de celular
        texto area -->
    <fieldset>
      <b-card class=" col-md-6 ml-auto mr-auto border-0">
        <form
          action="https://radical-dreamers-api.herokuapp.com/"
          method="POST"
        >
          <p class="h2 text-center mb-4">Contate-nos</p>

          <!-- Fala o nome -->
          <label for="nome" class="grey-text"> </label>
          <input
            type="text"
            id="nome"
            class="form-control"
            placeholder="Digite Seu Nome"
          />

          <br />

          <!-- fala o email -->
          <!-- colocar o required depois no email -->
          <label for="email" class="grey-text"></label>
          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="Digite Seu Email"
          />

          <br />

          <!-- telefone -->
          <label for="telefone" class="grey-text"> </label>
          <input
            type="text"
            id="telefone"
            class="form-control"
            placeholder="Digite Seu Telefone"
          />

          <br />

          <!-- deixe a mensagem -->
          <label for="mensagem1" class="grey-text"> </label>
          <textarea
            type="text"
            id="mensagem2"
            class="form-control"
            rows="3"
            placeholder="Digite Sua Mensagem"
          ></textarea>

          <div class=" text-center mt-4">
            <button type="submit" id="botao">Enviar</button>
          </div>
        </form>
      </b-card>
    </fieldset>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.conteiner {
  padding: 20px 0px 35px;
}

#espaco {
  padding: 20px;
}

/* aki e o teste */

fieldset {
  border: none;
}

input[type='text'],
input[type='email'] {
  box-sizing: border-box;
  outline: none;
  display: block;

  border: none;
  border-bottom: 0.5px solid #ddd;
  height: 45px;
}

textarea {
  resize: none;
}

#botao {
  padding: 10px 45px;
  color: #ffffff;
  background: #4e97c3;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  border-radius: 5%;
}

#botao:hover {
  background: #1a56ed;
}
</style>
