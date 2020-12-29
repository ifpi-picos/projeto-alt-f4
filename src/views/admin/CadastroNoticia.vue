<template>
  <div>
    <sidebar-titulo nomeTitulo="Cadastro"></sidebar-titulo>

    <div class="form-container">
      <b-form class="container mt-4">
        <b-form-group>
          <label for="titulo">Título:</label>
          <b-form-input
            id="titulo"
            type="text"
            v-model="noticia.titulo"
            placeholder="Título"
            required
          ></b-form-input>
        </b-form-group>

        <label for="descricao">Descrição:</label>
        <editor id="descricao" v-model="noticia.descricao"></editor>

        <b-form-group class="mt-3" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            id="checkbox-group-1"
            v-model="noticia.selecao"
            :options="opcoes"
            :aria-describedby="ariaDescribedby"
            name="flavour-1"
          ></b-form-checkbox-group>

          <div class="data mt-4" style="display: flex; align-items: center;">
            <span class="mr-2">Data de Postagem:</span>
            <b-input
              type="date"
              required
              v-model="noticia.data"
              style="width: 200px"
            ></b-input>
          </div>
        </b-form-group>

        <b-form-group>
          <label for="autor">Autor:</label>
          <b-form-input
            id="autor"
            type="text"
            v-model="noticia.autor"
            placeholder="Autor"
            required
          ></b-form-input>
        </b-form-group>
      </b-form>

      <b-button
        type="button"
        pill
        variant="primary"
        class="mt-4"
        @click="addNoticia()"
      >
        Adicionar noticia
      </b-button>
    </div>
  </div>
</template>

<script>
import SidebarTitulo from '../../components/SidebarTitulo.vue'
import Editor from '../../components/Editor'

export default {
  components: {
    SidebarTitulo,
    Editor
  },

  data () {
    return {
      noticia: {
        titulo: '',
        descricao: '',
        selecao: [],
        data: null,
        autor: ''
      },
      opcoes: [
        { text: 'Ocultar', value: 'ocultar' },
        { text: 'Destaques', value: 'destaques' },
        { text: 'Notícia', value: 'noticia' },
        { text: 'Game', value: 'game' }
      ]
    }
  },

  methods: {
    addNoticia () {
      const noticia = this.$firebase.firestore().collection('noticias')

      noticia.add(this.noticia).then((docRef) => {
        console.log(docRef.id)
      })
      .catch((error) => {
        console.error(error);
      })
    }
  }
}
</script>

<style scoped>
label {
  font-size: 20px;
  font-weight: 500;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
