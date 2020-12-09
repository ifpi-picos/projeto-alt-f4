<template>
  <div class="container-fluid">
    <section class="row justify-content-center">
      <div v-for="card in cards" :key="card.id" class="col-md-3 col-sm-6">
        <b-button
          style="border: none"
          class="mb-2 bg-light p-0"
          @click="showDetails(card.id)"
        >
          <b-card
            img-src="img/640x790/AVELAR.png"
            img-alt="Image"
            overlay
            class="my-3 mx-5 border-light"
          >
          </b-card>
        </b-button>
      </div>
      <br />
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
        },
        {
          title: "Title 2",
          id: 2,
        },
        {
          title: "Title 3",
          id: 3,
        },
        {
          title: "Title 4",
          id: 4,
        },
        {
          title: "Title 5",
          id: 5,
        },
        {
          title: "Title 6",
          id: 6,
        },
        {
          title: "Title 7",
          id: 7,
        },
        {
          title: "Title 8",
          id: 8,
        },
      ],
    };
  },
  methods: {
    showDetails(id) {
      this.$router.push({ name: "Game", params: { id: id } });
    },
  },
};
</script>
<style scoped></style>
