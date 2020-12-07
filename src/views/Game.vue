<template>
  <div class="container-fluid">
    <div class="m-5">
      <h1>{{ game.title }}</h1>
      <h2>{{ game.subtitle }}</h2>
      <p class="text-justify">{{ game.description }}</p>
      <div class="links d-flex justify-content-center my-4">
        <a href="" class="bi bi-download btn btn-outline-primary"
          ><svg
            width="3em"
            height="3em"
            viewBox="0 0 16 16"
            class="bi bi-download"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
            />
          </svg>
          Download</a
        >
      </div>

      <div class="video my-5">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/LWKaM3Awq6A"
          allowfullscreen
        ></b-embed>
      </div>
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
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
