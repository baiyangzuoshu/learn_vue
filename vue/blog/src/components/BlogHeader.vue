<template>
    <nav >
        <ul >
          <li>
            <label>快乐简单,忧愁不易</label>
          </li>
          <li >
            <router-link  to="/">博客纵览</router-link>
            <router-link  to="/AddBlog">写博客</router-link>
          </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name:"BlogHeader"
}
</script>

<style>
ul{
	list-style-type: none;
	text-align: center;
	margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}

a{
  color: #fff;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}
nav{
	background: crimson;
	padding: 30px 0;
	margin-bottom: 40px;
}

.router-link-active{
	background: rgba(255,255,255,0.8);
	color: #444;
}
</style>
