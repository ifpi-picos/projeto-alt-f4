<template>
  <div class="container">
    <section class="p-0 row justify-content-center">
      <div v-for="card in cards" :key="card.id" class=" col-md-4 col-sm-12">
        <b-card
          title="Card Title"
          img-src="img/900X900/MEMEMCARDARENA.png"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-4"
          @click="showDetails(card.id)"
        >
        <div>
          <b-card-text>  <p>Card game online sobre os memes classicos</p> </b-card-text>
          <p><span>Postado por Cinthia Raquel em 11 de fevereiro de 2020 </span> </p>
          <b-button href="/Noticia" variant="secondary">Noticia</b-button>
        </div>
        </b-card>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Title 1",
          id: 1,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          title: "Title 2",
          id: 2,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          title: "Title 3",
          id: 3,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          title: "Title 4",
          id: 4,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          title: "Title 5",
          id: 5,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          title: "Title 6",
          id: 6,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          title: "Title 7",
          id: 7,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          title: "Title 8",
          id: 8,
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
      ],
    };
  },
  methods: {
    showDetails(id) {
      this.$router.push({ name: "Noticia", params: { id: id } });
    },
  },
};
</script>
<style scoped>
.container {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  p span{
    font-size: 12px;
    
  }

  b-card-text, p{
    font-size: 20px;
  }
</style>
