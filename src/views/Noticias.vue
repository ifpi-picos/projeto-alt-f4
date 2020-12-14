<template>
  <div class="container-fluid">
    <section class="p-0 row justify-content-center">
      <div v-for="card in cards" :key="card.id" class="p-0 col-md-3 col-sm-6">
        <b-card
          title="Card Title"
          img-src="img/640x790/AVELAR.png"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="my-3 mx-3 p-0"
          @click="showDetails(card.id)"
        >
          <b-card-text> Some quick example text to build on the card title </b-card-text>
          <b-button href="/Noticia" variant="secondary">Noticia</b-button>
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
<style scoped></style>
