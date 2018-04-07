<template>
  <div id="single-blog">
    <h1> {{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>Author: {{blog.author}}</p>
    <ul>
      <li v-for="x in blog.categories">{{x}}</li>
    </ul>
  </div>

</template>

<script>
export default {
  data() {
    return {
      blog: {},
      id: this.$route.params.id
    }
  },

  created(){
    this.$http.get('https://vue-blog-list-b8603.firebaseio.com/posts/' + this.id + '.json').then(function(data){
      console.log(data);
      this.blog = data.body
    });
  }
}

</script>


<style scoped>
  #single-blog{
      max-width: 960px;
      margin: 0 auto;
  }
</style>
