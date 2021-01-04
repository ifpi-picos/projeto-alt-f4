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
      <div class="row">
        <div class="col-md-4">
          <b-card
            title="Avelar"
            img-src="img/900X900/AVELAR.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-4"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

          </b-card>
        </div>
        <div class="col-md-4">
          <b-card
            title="Lendas RPG"
            img-src="img/900X900/LENDAS RPG.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-4"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

          </b-card>
        </div>
        <div class="col-md-4">
          <b-card
            title="Reborn"
            img-src="img/900X900/REBORN.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-4"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
        </div>
      </div>
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
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
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
