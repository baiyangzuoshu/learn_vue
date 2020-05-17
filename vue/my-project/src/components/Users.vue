<template>
  <div class="Users">
    <h1>Users</h1>

    <form v-on:submit="addUsers" >
      <input type="text" v-model="addUser.name" placeholder="name"/>
      <input type="text" v-model="addUser.email" placeholder="email"/>
      <input type="submit" value="Submit"/>
    </form>

    <ul >
      <li  v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.contacetd">
        <span :class="{contacetd:user.contacetd}">
          {{user.name}}:{{user.email}}
          <button v-on:click="deleted(user)">x</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
//外部使用此组件
export default {
  name:"Users",
  methods:{
    addUsers:function(){
      this.users.push({
        name:this.addUser.name,
        email:this.addUser.email,
        contacetd:false
      });
      e.preventDefault();
    },
    deleted:function(e){
      let pos=this.users.indexOf(e);
      if(pos!=-1){
        this.users.splice(pos,1);
      }
      this.users.push({
        name:this.addUser.name,
        email:this.addUser.email,
        contacetd:false
      });
    }
  },
  data(){
    return {
      addUser:{},
      users:[

      ]
    }
  },
  created:function(){
      this.$http.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
          let data=res.data;
          data.forEach(el=>{
            this.users.push({
              name:el.name,
              email:el.email
            });
          })
        })
  }
}
</script>

<!--scoped域-->
<style scoped>
  .contacetd{
    text-decoration:line-through;
  }
</style>
