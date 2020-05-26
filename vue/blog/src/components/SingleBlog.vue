<template>
    <div id="SingleBlog">
      <h1 >{{blog.title}}</h1>
      <article>{{blog.body}}</article>
    </div>
</template>

<script>
export default {
  name:"SingleBlog",
  data(){
    return {
      id:this.$route.params.id,
      blog:{}
    }
  },
  created(){
    this.$http.get("https://jsonplaceholder.typicode.com/posts/"+this.id)
      .then((data)=>{
        console.log(data);
        this.blog=JSON.parse(data.body.datas);
      })
  }
}
</script>

<style>
#SingleBlog{
		max-width: 960px;
		margin: 0 auto;
		padding: 20px;
		background: #eee;
		border: 1px dotted #aaa;
	}
</style>
