<template>
  <div>
    <ckeditor
      :editor="editor"
      tag-name="textarea"
      v-model="form.post_text"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue2'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: 'Editor',

  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>Your Post Content</p>',
      editorConfig:{
        language: 'pt-br'
      },
      form: {
        post_text: '',
        post_title: '',
        post_image: ''
      }
    }
  },
}
</script>