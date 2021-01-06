<template>
  <div class="container-inicial">
    <sidebar-titulo nomeTitulo="Notícias"></sidebar-titulo>
    <div>
      <b-table striped hover :items="noticias"></b-table>
    </div>
  </div>
</template>

<script>
import SidebarTitulo from '../../components/SidebarTitulo.vue'

export default {
  components: {
    SidebarTitulo
  },
  data () {
    return {
      noticias: []
    }
  },

  mounted() {
    this.consultar()
  },

  methods: {
    consultar () {
      const noticias = this.$firebase.firestore().collection('noticias')

      noticias.get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.noticias.push(doc.data())
            // console.log(doc.id, ' => ', doc.data())
          });
        })
        .catch((error) => {
          console.error(error);
        })
    }
  }
}
</script>

<style scoped>
.container-inicial {
  width: 100vw;
  height: 100vh;
}
</style>
