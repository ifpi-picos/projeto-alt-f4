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
  width: 210px;
  height: 30px;
  border-radius: 5px;
  background: rgb(1, 168, 197);

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px auto 0px;
}

.color-text {
  color: #fff;
}
</style>
