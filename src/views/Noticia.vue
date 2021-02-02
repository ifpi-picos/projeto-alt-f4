<template>
  <div class="container-fluid">
    {{noticias}}

    <p ></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      noticias: []
    }
  },

  mounted() {
    this.fetchNoticia()
  },

  methods: {
    async fetchNoticias () {
      return await this.$firebase
        .firestore()
        .collection('noticias')
        .get()
    },

    async fetchNoticia () {
      try {
        const noticias = await this.fetchNoticias()

        if (noticias.length === 0) {
          return
        }

        const Url = window.location.href

        const idUrl = Url.split('noticia/')[1]

        noticias.forEach(noticia => {
          if(noticia.id === idUrl) {
            console.log(noticia.data())

            const ContentHtml = noticia.data().editorData.slice(1, -1)
            this.noticias.push(noticia.data().editorData)
          }
        })

      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
p span {
  font-size: small;
}

p {
  font-size: 20px;
  text-align: start;
  line-height: 1.5;
  padding-bottom: 15px;
}

.logo-rodape,
h3 {
  font-size: 28px;
}

b {
  font-size: 25px;
  padding: 20px;
}

img {
  width: 30px;
}

.content-right a {
  padding: 10px;
}
</style>
