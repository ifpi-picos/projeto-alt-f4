<template>
  <ckeditor
    :editor="editor"
    tag-name="textarea"
    v-model="editorData"
    :config="editorConfig"
  />
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
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
          ]
        },
      }
    }
  },

  props: {
    model: {
      type: String,
      default: ''
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
