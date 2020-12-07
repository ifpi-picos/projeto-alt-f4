<template>
  <div class="container-fluid">
    <section class="row justify-content-center">
      <div v-for="card in cards" :key="card.title" class="col-md-3 col-sm-6">
        <a href="/game">
          <b-card
            img-src="img/640x790/AVELAR.png"
            img-alt="Image"
            overlay
            class="my-2 p-3 border-light"
          ></b-card>
        </a>
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
        },
        {
          title: "Title 2",
        },
        {
          title: "Title 3",
        },
        {
          title: "Title 4",
        },
        {
          title: "Title 5",
        },
        {
          title: "Title 6",
        },
        {
          title: "Title 7",
        },
        {
          title: "Title 8",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
