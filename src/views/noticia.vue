<template >
  <div class="container-fluid">
        <div class="m-5">
            <div >
                <div>
                    <h1>{{ Noticia.title }}</h1>

                    <h4> {{ Noticia.subtitle }} </h4>

                    <div>
                        <small><a href="" title="">21 July, 2019</a></small>
                        <small><a href="" title="">by Cinthia Raquel</a></small>
                        <small><a href="" title=""></a></small>
                    </div>

                </div>

            </div>


            <div>
                <div ><br>
                    <div class="content-right">
                      <a href="https://www.instagram.com/radicaldreamersgames/"><img src="/img/svg/insta.svg"></a>
                      <a href="https://twitter.com/rdg_ltda"><img src="/img/svg/twitter.svg"></a>
                      <a href="https://www.facebook.com/RadicalDreamersGames"><img src="/img/svg/facebook.svg"></a>
                    </div>
                    <br>

                    <p>
                        In lobortis pharetra mattis. Morbi nec nibh iaculis, bibendum augue a, ultrices nulla. Nunc velit ante, lacinia id tincidunt eget, faucibus nec nisl. In mauris purus, bibendum et gravida dignissim, venenatis commodo lacus. Duis consectetur quis nisi nec
                        accumsan. Pellentesque enim velit, ut tempor turpis. Mauris felis neque, egestas in lobortis et,iaculis at nunc ac, rhoncus sagittis ipsum.
                    </p>

                    <p>
                        Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla finibus volutpat. Integer pulvinar
                        massa vitae ultrices posuere. Proin ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim massa. Vivamus id condimentum orci. Nunc ac sem
                        urna. Aliquam et hendrerit nisl massa nunc.
                    </p>
                </div>

                <div>  
                    <b >    
                        Maecenas non convallis quam, eu sodales justo. Pellentesque quis lectus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.                      
                    </b>

                    <p>
                        Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla finibus volutpat. Integer pulvinar
                        massa vitae ultrices posuere. Proin ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim massa. Vivamus id condimentum orci. Nunc ac sem
                        urna. Aliquam et hendrerit nisl massa nunc.
                    </p>


                </div>

            </div>
        </div>      
  </div>
</template>

<script>
export default {
  data() {
    return {
      Noticia: {
        title: "Meme card",
      },
    };
  },
};
</script>

<style lang="scss" scoped>

  p span{
    font-size: small;
}

p{
    font-size: 20px;
    text-align: start;
    line-height: 1.5;
    padding-bottom: 15px;
}

.logo-rodape, h3 {
    font-size: 28px;
}

b{
    font-size: 25px;
    padding: 20px;
}

img{
  width: 30px;
}

.content-right a{
  padding: 10px;
}

</style>
