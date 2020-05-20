<template>
  <div v-theme="'wide'" id="show-blogs">
    <h1 >博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search">
    <div class="single-blog" v-for="blog in filteredBlogs">
      <router-link v-bind:to="'/blog/'+blog.id">
        <h2  v-rainbow>{{blog.title|toUppercase}}</h2>
      </router-link>
      <article>{{blog.body|snippet}}</article>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ShowBlogs',
  data(){
    return {
      blogs:[],
      search:""
    }
  },
  created(){
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
      this.blogs=res.body.slice(0,10);
    })
  },
  computed:{
    filteredBlogs:function(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      })
    }
  },
  filters:{
    toUppercase(val){
      return val.toUpperCase();
    }
  },
  directives:{
    "theme":{
      bind(el, binding, vnode) {
        if (binding.value == "wide") {
          el.style.width = "1260px";
        }
      }
    }
  }
}
</script>

<style>
#show-blogs{
	max-width: 800px;
	margin: 0 auto;
}

.single-blog{
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
  border: 1px dotted #aaa;
}

#show-blogs a{
  color: #444;
  text-decoration: none;
}

input[type="text"]{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
