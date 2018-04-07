<template> <!-- this is the root componnent -->
  <div>
  <app-header></app-header>
  <router-view></router-view>
  </div>

</template>

<script>
import headerBlog from './components/header.vue';

export default {
  components:{
    'app-header': headerBlog
  },
  data() {
    return {

    }
  },
  methods:{


  }
}
</script>


<style>
  body{
    margin: 0;
    padding: 0;
  }
</style>
