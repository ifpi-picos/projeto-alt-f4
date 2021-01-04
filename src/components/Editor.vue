<template>
  <div>
    <ckeditor
      :editor="editor"
      tag-name="textarea"
      v-model="editorData"
      :config="editorConfig"
    />
    <button @click="teste">Teste</button>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import MyUploadAdapter from '@/plugins/UploadAdapter'

export default {
  name: 'Editor',

  data () {
    return {
      editor: ClassicEditor,
      editorData: '',
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
    teste () {
      console.log('editorData: ', this.editorData)
    },
    uploader (editor) {
      editor.plugins.get('FileRepository').createUploadAdapter = loader => {
        return new MyUploadAdapter(loader)
      }
    },
    addNoticia () {
      const conteudoEditor = this.$firebase.firestore().collection('noticias')

      conteudoEditor
        .add(this.noticia)
        .then(docRef => {
          console.log(docRef.id)
        })
        .catch(error => {
          console.error(error)

          alert('Usuário não autorizado!!!')
        })
    }
  }
}
</script>
