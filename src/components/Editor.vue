<template>
  <form @submit.prevent="store">
    <ckeditor
      :editor="editor"
      tag-name="textarea"
      :v-model="model"
      :config="editorConfig"
    />
  </form>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue2'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import MyUploadAdapter from '@/plugins/UploadAdapter'

export default {
  name: 'Editor',

  props: {
    model: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      editor: ClassicEditor,
      editorData: '<p>Your Post Content</p>',
      editorConfig: {
        language: 'pt-br',
        extraPlugins: [this.uploader]
      }
    }
  },

  methods: {
    uploader (editor) {
      editor.plugins.get('FileRepository').createUploadAdapter = loader => {
        return new MyUploadAdapter(loader)
      }
    }
  }
}
</script>
