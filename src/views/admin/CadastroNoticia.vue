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

        <b-form-group>
          <label for="img-card">Imagem Card:</label>
          <b-form-file
            class="mb-2"
            id="img-card"
            required
            placeholder="Escolha um arquivo ou solte-o aqui..."
            drop-placeholder="Solte o arquivo aqui..."
            @change="previewImage"
            accept="image/*"
          ></b-form-file>

          <div v-if="imageData != null">
            <img class="preview" :src="noticia.cardImg" />
            <br />
            <br />
            <b-button @click="onUpload" variant="primary">Upload</b-button>
          </div>
        </b-form-group>

        <label for="conteudo">Conteúdo:</label>
        <ckeditor
          :editor="editor"
          tag-name="textarea"
          v-model="noticia.editorData"
          :config="editorConfig"
        />

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
        class="mt-4 mb-4"
        @click="addNoticia()"
      >
        Adicionar noticia
      </b-button>
    </div>
  </div>
</template>

<script>
import SidebarTitulo from '../../components/SidebarTitulo.vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import MyUploadAdapter from '@/plugins/UploadAdapter'

export default {
  components: {
    SidebarTitulo
  },
    props: {
      model: {
        type: String,
        default: ''
      }
    },

  data () {
    return {
      noticia: {
        titulo: '',
        cardImg: null,
        selecao: [],
        data: null,
        autor: '',
        editorData: ''
      },
      imageData: null,
      opcoes: [
        { text: 'Ocultar', value: 'ocultar' },
        { text: 'Destaques', value: 'destaques' },
        { text: 'Notícia', value: 'noticia' },
        { text: 'Game', value: 'game' }
      ],
      editor: ClassicEditor,
      editorConfig: {
        language: 'pt-br',
        extraPlugins: [this.uploader],
        heading: {
          options: [
            {
              model: 'paragraph',
              title: 'Paragraph',
              class: 'ck-heading_paragraph'
            },
            {
              model: 'heading1',
              view: 'h1',
              title: 'Heading 1',
              class: 'ck-heading_heading1'
            },
            {
              model: 'heading2',
              view: 'h2',
              title: 'Heading 2',
              class: 'ck-heading_heading2'
            }
          ]
        }
      }
    }
  },

  methods: {
    addNoticia () {
      const noticia = this.$firebase.firestore().collection('noticias')
      noticia
        .add(this.noticia)
        .then(docRef => {
          console.log(docRef.id)

          alert("Notícia Adicionada")
        })
        .catch(error => {
          console.error(error)
          alert('Usuário não autorizado!!!')
        })
    },

    previewImage (event) {
      this.noticia.cardImg = null
      this.imageData = event.target.files[0]
    },

    onUpload () {
      this.noticia.cardImg = null
      const storageRef = this.$firebase
        .storage()
        .ref(`cards/${this.imageData.name}`)
        .put(this.imageData)

      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        },
        error => {
          console.log(error.message)
        },
        () => {
          this.uploadValue = 100
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.noticia.cardImg = url
          })
        }
      )
    },

    uploader (editor) {
      editor.plugins.get('FileRepository').createUploadAdapter = loader => {
        return new MyUploadAdapter(loader)
      }
    }
  }
}
</script>

<style scoped>
img.preview {
  width: 250px;
}

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
