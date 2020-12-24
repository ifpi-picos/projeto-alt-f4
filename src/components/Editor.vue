<template>
  <form @submit.prevent="store">
    <ckeditor
      :editor="editor"
      v-model="form.content"
      :error-messages="errors.content"
      :config="editorConfig"
    />
  </form>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue2'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import UploadAdapter from '../uploadadapter'

export default {
  data () {
    return {
      form: {
        content: null
      },
      editor: ClassicEditor,
      editorConfig: {
        toolbar: [
          'heading',
          '|',
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          '|',
          'insertTable',
          '|',
          'imageUpload',
          'mediaEmbed',
          '|',
          'undo',
          'redo'
        ],
        table: {
          toolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
        },
        extraPlugins: [this.uploader],
        language: 'nl'
      }
    }
  },

  methods: {
    store () {
      // Some code
    },

    uploader (editor) {
      editor.plugins.get('FileRepository').createUploadAdapter = loader => {
        return new UploadAdapter(loader)
      }
    }
  },

  components: {
    ckeditor: CKEditor.component
  }
}
</script>
