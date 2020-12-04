<template>
  <div class="container">
    <section class="row">
      <div v-for="game in games" :key="game.title" class="col-md-4">
        <b-card
          :title="game.title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-card-text>
            {{ game.description }}
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <router-link to="/game" class="btn btn-primary"
            >Go somewhere</router-link
          >
        </b-card>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      games: [
        {
          title: 'Title 1',
          description: 'Des 1'
        },
        {
          title: 'Title 2',
          description: 'Des 2'
        },
        {
          title: 'Title 3',
          description: 'Des 3'
        },
        {
          title: 'Title 4',
          description: 'Des 4'
        }
      ]
    }
  }
}
</script>
<style scoped></style>
