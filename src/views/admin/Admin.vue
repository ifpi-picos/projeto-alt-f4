<template>
  <div class="container-inicial">
    <sidebar-titulo nomeTitulo="Notícias"></sidebar-titulo>
    <div class="container">
      <b-table striped hover :items="noticia" class=""></b-table>
    </div>

  </div>
</template>

<script>
import SidebarTitulo from '../../components/SidebarTitulo.vue'

export default {
  components: {
    SidebarTitulo
  },
  data() {
      return {
        noticia: [],
        
      }
  },
  methods: {
    salvar() {
      this.$firebase.firestore().collection('noticias')
        .get().then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function(error) {
            console.log("Error getting document:", error);
        });
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