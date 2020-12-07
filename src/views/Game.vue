<template>
  <div class="container-fluid">
    <div class="text mx-4 my-4">
      <h1>{{ game.title }}</h1>
      <h2>{{ game.subtitle }}</h2>
      <p>{{ game.description }}</p>
      <a href="">download do game</a>
      <iframe src="" frameborder="0"></iframe>
      <a href="">contato</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      game: {
        title: "Title 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        subtitle: "Generate Lorem Ipsum placeholder text.",
        download: "link de download",
        video: "video do game",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
