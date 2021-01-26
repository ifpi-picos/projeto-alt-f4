<template>
  <div class="container">
    <section class="p-0 row justify-content-center">
      <div v-if="isLoading">
        <b-button variant="primary" disabled>
          <b-spinner small type="grow"></b-spinner>
          Loading...
        </b-button>
      </div>

      <div v-for="card in cards" :key="card.id" class="col-md-4 col-sm-12">
        <b-card
          v-bind:img-src="card.data().cardImg"
          v-bind:img-alt="card.data().titulo"
          img-top
          tag="article"
          style="max-width: 20rem; cursor: pointer"
          class="mb-4"
          @click="showDetails(card.id)"
        >
          <h4>{{ card.data().titulo }}</h4>
          <p>{{ card.data().autor }}</p>
        </b-card>
      </div>
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
      this.$router.push({ name: 'Noticia', params: { id } })
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
        .where("selecao", "array-contains", "noticia")
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

p span {
  font-size: 12px;
}

b-card-text,
p {
  font-size: 20px;
}
</style>
