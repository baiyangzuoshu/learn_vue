<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">简单/易用/便捷</h5>
    <translateForm   v-on:formSubmit="translateText"></translateForm>
    <TranslateOutput v-text="translatedText"></TranslateOutput>
  </div>
</template>

<script>

import  TranslateForm   from "./components/TranslateForm"
import  TranslateOutput from "./components/TranslateOutput"

export default {
  name: 'App',
  data:function(){
    return {
      translatedText:""
    }
  },
  components: {
    TranslateForm,TranslateOutput
  },
  methods:{
    translateText:function(text,lang){
      this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key="+
      "trnsl.1.1.20200517T023445Z.90ed83cc9a937f27.53e8b94d1c8a19800d616f97e25a475d9de02972"+
      "&lang="+lang+"&text="+text).then(res=>{
        this.translatedText=res.body.text[0];
      })
    }
  }
}
</script>

<style>
  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }
</style>
