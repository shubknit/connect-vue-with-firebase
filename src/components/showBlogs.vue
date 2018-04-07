<template>
  <div id="show-blog" v-theme:column="'wide'">
    <h1> Show Blog </h1>
    <input type ="text" placeholder="search blogs" v-model="search"/>
    <div v-for="x in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/single/'+x.id"> <h2 v-rainbow>{{x.title | to-uppercase}}</h2></router-link>
      <article>{{x.content | to-trim}}</article>
    </div>
  </div>

</template>

<script>
import searchMixin from '../mixins/searchMixin';
export default {
  data() {
    return {
      blogs: [],
      search: ''
    }
  },
  methods:{


  },
  /*
   computed:{
       filteredBlogs: function(){
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    }
  }, */

  created(){
    /*this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      this.blogs = data.body.slice(0,10);
    });*/
    this.$http.get('https://vue-blog-list-b8603.firebaseio.com/posts.json/').then(function(data){
      return data.json();
    }).then(function(data){
      var blogsArray = [];
      for(let key in data){
        data[key].id = key;
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
    });

  },

  // registering filters locally

 filters: {
   'to-uppercase': function(value){
     return value.toUpperCase();
   }
 },

  // registering directives locally

  directives: {
    'rainbow': {
      bind(el,binding,vnode){
        el.style.color = '#'+ Math.random().toString().slice(2,8);
      }
    }
  },
  mixins: [searchMixin]
}

</script>


<style scoped>
#show-blog {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
