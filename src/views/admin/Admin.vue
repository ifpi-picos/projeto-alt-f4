<template>
  <div class="container-inicial">
    <h1 class="text-center">Notícias</h1>
    <div class="container">
      <b-table striped hover :items="items"></b-table>
    </div>

  </div>
</template>

<script>
export default {
  data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
}
</script>

<style scoped>
  .container-inicial {
    width: 100vw;
    height: 100vh;

    /* background: #3B56BF;

    color: #ffffff; */
  }

</style>