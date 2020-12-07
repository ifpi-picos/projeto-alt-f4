<template>
  <div class="conteiner">
    <p class="h5 col-md-6 mr-auto ml-auto" id="espaco">
      Quer entrar em contato conosco? Preencha o formulário abaixo para me
      enviar uma mensagem e vamos tentar responder para você dentro de 24 horas!
    </p>
    <!-- 
        nome
        email
        numero de celular
        texto area -->

    <b-card class="col-md-6 ml-auto mr-auto bg-info">
      <form>
        <p class="h2 text-center mb-4">Contate-nos</p>

        <!-- Fala o nome -->
        <label for="nome" class="grey-text">Nome</label>
        <input
          type="text"
          id="nome"
          class="form-control"
          placeholder="Digite Seu Nome"
        />

        <br />

        <!-- fala o email -->
        <!-- colocar o required depois no email -->
        <label for="email" class="grey-text">E-mail</label>
        <input
          type="email"
          id="email"
          class="form-control"
          placeholder="Digite seu Email"
        />

        <br />

        <!-- telefone -->
        <label for="telefone" class="grey-text">Telefone</label>
        <input
          type="number"
          id="telefone"
          class="form-control"
          placeholder="Digite seu telefone"
        />

        <br />

        <!-- deixe a mensagem -->
        <label for="mensagem" class="grey-text">Mensagem</label>
        <textarea
          type="text"
          id="mensagem"
          class="form-control"
          rows="3"
          placeholder="digite sua mensagem"
        ></textarea>

        <div class="text-center mt-4">
          <!-- <button class="btn btn-outline-warning"  type="submit">Enviar</button> -->
          <button class="btn btn bg-success">Enviar</button>
        </div>
      </form>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .conteiner
  {
    padding: 20px 0px 35px;
  }

  #espaco
  {
    padding: 20px;
  }
</style>