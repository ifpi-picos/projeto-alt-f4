<template>
  <div class="container">
    <h2>{{ game.title }}</h2>
    <p>{{ game.description }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      game: {
        title: 'Title 1',
        description: 'desc 1'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
