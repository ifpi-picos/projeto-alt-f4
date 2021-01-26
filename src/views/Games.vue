<template>
  <div class="container-fluid">
    <section class="row justify-content-center">
      <div v-for="card in cards" :key="card.id" class="p-0 col-md-3 col-sm-6">
        <b-card
          img-src="img/640x790/AVELAR.png"
          img-alt="Image"
          overlay
          class="p-0 my-3 mx-5 border-light"
          @click="showDetails(card.id)"
          style="cursor: pointer"
        >
        </b-card>
      </div>
      <br />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    showDetails(id) {
      this.$router.push({ name: "Game", params: { id: id } });
    },

    consultar () {
      const cards = this.$firebase.firestore().collection('noticias')

      cards.get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            var card = doc.data()
            console.log(card)
          });
        })
        .catch((error) => {
          console.error(error);
        })
    }
  },
};
</script>
