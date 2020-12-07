<template>
  <div class="container-fluid">
    <div class="m-5">
      <h1>{{ game.title }}</h1>
      <h2>{{ game.subtitle }}</h2>
      <p class="text-justify">{{ game.description }}</p>
      <a href="" class="badge badge-pill badge-primary">download do game</a>
      <a :href="video" class="d-block mx-auto"></a>
      <a href="/contato" class="btn btn-info mx-auto">Contato</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      game: {
        title: "Avelar Chronicles",
        description:
          "O jogo Avelar Chronicles, conta a história de Avelar que é um pesquisador que viaja pela Caatinga Brasileira, catalogando as espécies de plantas e animais. No decorrer de sua viagem ele ajuda agricultores, incentivando uma produção sustentável, preparação para os períodos de chuva e ajudar a preservar a biodiversidade do bioma, evitando a caça de animais, queimadas e outros eventos. Avelar também registra os animais e plantas encontrados em dispositivo chamado Biodex, uma plataforma para cadastrar e ver às informações relevantes como fotos, características, e etc. O jogo segue padrões artísticos e jogabilidades idealizados por clásssicos da insdústria de desenvolvimento de jogos, como Pokemón e The Legend of Zelda, também conhecidos como jogos de plataforma.",
        download: "link de download",
        video: "https://youtu.be/c_KC_Wek8o8",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
