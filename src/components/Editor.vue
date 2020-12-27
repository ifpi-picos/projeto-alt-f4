<template>
  <div>
    <ckeditor
      :editor="editor"
      tag-name="textarea"
      v-model="form.content"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue2'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import MyUploadAdapter from '@/plugins/UploadAdapter'

export default {
  name: 'Editor',

  data () {
    return {
      editor: ClassicEditor,
      editorData: '<p>Your Post Content</p>',
      editorConfig: {
        language: 'pt-br',
        extraPlugins: [this.uploader]
      },
      form: {
        content: ''
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
