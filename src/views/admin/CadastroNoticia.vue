<template>
  <div>
    <sidebar-titulo nomeTitulo="Cadastro"></sidebar-titulo>

    <b-form class="container mt-4">
      <b-form-group>
        <label for="titulo">Título:</label>
        <b-form-input
          id="titulo"
          type="text"
          v-model="titulo"
          placeholder="Título"
          required
        ></b-form-input>
      </b-form-group>

      <label for="descricao">Descrição:</label>
      <editor id="descricao"></editor>
    </b-form>
  </div>
</template>

<script>
import SidebarTitulo from '../../components/SidebarTitulo.vue'
import Editor from '../../components/Editor.vue'

export default {
  components: {
    SidebarTitulo,
    Editor
  }
}

</script>

<style scoped>
label {
  font-size: 20px;
  font-weight: 500;
}
</style>
