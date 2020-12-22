<template>
  <div
    style="background: #4e97c3; width: 100vw; padding: 5px 0 1px; color: #fff"
  >
    <h1 class="text-center">{{ nomeTitulo }}</h1>
  </div>
</template>

<script>
export default {
  name: 'SidebarTitulo',
  props: {
    nomeTitulo: {
      type: String,
      default: ''
    }
  }
}
</script>
