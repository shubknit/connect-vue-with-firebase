import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'

// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
    routes: Routes,
    mode : 'history'
});


//Vue.component('ninjastemplate',ninjas1)  registering globally

// Custom directives globally
/* Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = '#'+ Math.random().toString().slice(2,8);
  }
}); */

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide')
      el.style.maxWidth = '900px';
    if(binding.arg == 'column') {
      el.style.background = "#ddd";
      el.style.padding=  '20px';
    }
  }
});

// registering filters globally
/*Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
}); */

Vue.filter('to-trim',function(value){
  return value.slice(0,100)+"...";
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
