<template>
  <div>
    <!-- crrossel  -->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="1024"
      img-height="460"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      @reset="0.1"
      class="mt-3"
    >
      <!-- Text slides with image -->
      <b-carousel-slide img-src="img/full hd/avelar.png"></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="img/full hd/lendasrpg.png"> </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="img/full hd/MEMEMCARD.png"></b-carousel-slide>
    </b-carousel>

    <div class="container">
      <h2 class="text-center mb-4">Notícias</h2>

      <section class="p-0 row">
        <div v-for="card in cards" :key="card.id" class="col-md-4">
          <b-card
            v-bind:img-src="card.data().cardImg"
            v-bind:img-alt="card.data().titulo"
            img-top
            tag="article"
            style="max-width: 18rem; cursor: pointer"
            class="mb-4"
            @click="showDetails(card.id)"
          >
            <h4>{{ card.data().titulo }}</h4>
            <p>{{ card.data().autor }}</p>
          </b-card>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      slide: 0,
      sliding: null,
      cards: []
    }
  },

  mounted () {
    this.fetchCards()
  },

  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },

    showDetails (id) {
      this.$router.push({ name: 'Noticia', params: { id } })
    },

    async fetchNoticias () {
      return await this.$firebase
        .firestore()
        .collection('noticias')
        .where("selecao", "array-contains", "noticia")
        .limit(3)
        .get()
    },

    async fetchCards () {
      try {
        const cards = await this.fetchNoticias()

        if (cards.length === 0) {
          return
        }

        cards.forEach(card => {  
          // cards.sort((a, b) => {
          //   return (a.card.data().data > b.card.data().data) ? 1 : ((b.card.data().data > a.card.data().data) ? -1 : 0);
          // });

          this.cards.push(card)

          console.log(card.data())
        })

      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

  .container {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .container h2 {
    font-size: 56px;
    font-weight: 500;
  }

</style>
