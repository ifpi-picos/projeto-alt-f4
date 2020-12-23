<template>
  <router-link class="botao-container color-text" :to="to">{{
    nomeLink
  }}</router-link>
</template>

<script>
export default {
  name: 'BotaoLink',
  props: {
    nomeLink: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.botao-container {
  width: 180px;
  height: 30px;
  border-radius: 5px;
  background: #4e97c3;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px auto 0px;
}

.color-text {
  color: #fff;
}
</style>
