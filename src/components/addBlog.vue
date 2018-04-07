<template>
  <div id ="add-blog">
    <form v-if="!submitted">
      <h2>Add a new Blog</h2>
      <label for="title">Blog title</label>
      <input type="text" id="title" v-model.lazy="blog.title" placeholder="title">
      <label for="content">Blog content</label>
      <textarea  id="content" v-model.lazy="blog.content" placeholder="content"/>
      <div class ="checkboxes">
        <label>Ninjas</label>
        <input type ="checkbox" value="Ninjas" v-model="blog.categories">
        <label>Mario</label>
        <input type ="checkbox" value="Mario" v-model="blog.categories">
        <label>Cheese</label>
        <input type ="checkbox" value="Cheese" v-model="blog.categories">
      </div>
      <p>Author</p>
      <select v-model="blog.author">
        <option v-for="x in authors">{{x}}</option>
      </select>
      <!--<button v-on:click.prevent="addBlog">add blog</button> -->
      <button v-on:click.prevent="addBlogToFirebase">add blog</button>
   </form>
   <p v-if="submitted">Thanks for your post</p>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title:{{blog.title}}</p>
      <p>Blog content:{{blog.content}}</p>
      <p>Blog Categories
        <ul>
          <li v-for="x in blog.categories">{{x}}</li>
        </ul>
      </p>
      <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      submitted: false,
      authors: ['Jack', 'Nick', 'Tom', 'Paul']
    }

  },
  methods:{
    addBlog: function(){
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        userId:1,
        title: this.blog.title,
        body: this.blog.content

      }).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    },
    addBlogToFirebase: function(){
      this.$http.post('https://vue-blog-list-b8603.firebaseio.com/posts.json/',this.blog).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    },
  }
}
</script>

<style scoped>
#add-blog{
  max-width: 500px;
  margin: 0 auto;
}
label{
display: inline-block;
}
select{
  width: 30%;
}
input[type="text"],textarea {
  width: 100%;
  display: block;
  padding: 5px 2px;
  margin-bottom: 10px;
}
#preview {
  border: 1px solid #eee;
  margin-top: 20px;
 padding: 0 20px;
}
</style>
