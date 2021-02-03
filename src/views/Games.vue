<template>
  <div class="container-fluid">
    <section class="row">
      <div v-if="isLoading">
        <b-button variant="primary" disabled>
          <b-spinner small type="grow"></b-spinner>
          Loading...
        </b-button>
      </div>

      <div v-for="card in cards" :key="card.id" class="p-0 col-md-3 col-sm-6">
        <b-card
          v-bind:img-src="card.data().cardImg"
          v-bind:img-alt="card.data().titulo"
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
  data () {
    return {
      cards: [],
      isLoading: true
    }
  },

  mounted () {
    this.fetchCards()
  },

  methods: {
    showDetails (id) {
      this.$router.push({ name: 'Game', params: { id } })
    },

    setLoading (state) {
      if (typeof state !== 'boolean') {
        return
      }

      this.isLoading = state
    },

    async fetchNoticias () {
      return await this.$firebase
        .firestore()
        .collection('noticias')
        .where('selecao', 'array-contains', 'game')
        .get()
    },

    async fetchCards () {
      try {
        const cards = await this.fetchNoticias()

        if (cards.length === 0) {
          return
        }

        cards.forEach(card => {
          this.cards.push(card)
        })

        this.setLoading(false)
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
</style>
