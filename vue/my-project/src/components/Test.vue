<template>
  <div class="test">
    <h1 class="">{{title}}</h1>
    <p class="">{{user.firstName}}</p>
    <p class="" v-text="user.lastName"></p>
    <p class="" v-if="showName">showName</p>
    <p  v-else>showName</p>
    <ul>
      <li v-for="item in items">
        {{item}}
      </li>
    </ul>
    <button  @click="greet">Say Greeting</button>
    <input type="text" @keyup="presskey" @keyup.enter="keyEnter"/>
    <hr>
    <label for="" class="">
      <input type="text" v-model="user.firstName"/>
      <br>
      <input type="text" v-model="user.lastName"/>
      <br>
    </label>
    <p3 >{{fullName}}</p3>

    <h3>{{msg}}</h3>
  </div>
</template>

<script>
//外部使用此组件
export default {
  name:"Test",
  props:{
    msg:{
      type:String,
      default:"default"
    }
  },
  methods:{
      greet:function(){
        alert("hello vue!!!");
      },
      presskey:function(){

      },
      keyEnter:function(){
        alert("keyEnter")
      }
  },
  data(){
    return {
      title:"Hello vue.js",
      user:{
        firstName:"JUNMAO",
        lastName:"YOU"
      },
      showName:false,
      items:[
        1,2,3,4,5,6
      ]
    }
  },
  computed:{
    fullName:function(){
      return this.user.firstName+" "+this.user.lastName;
    }
  }
}
</script>

<!--scoped域-->
<style scoped>

</style>
