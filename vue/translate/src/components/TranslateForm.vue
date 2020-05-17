<template>
  <div  id="TranslateForm" >
    <div   >
      <form  v-on:submit="formSubmit" >
        <input   type="text" v-model="textToTranslate"   placeholder="请输入"/>
        <select  v-model="language">
          <option value="en" >English</option>
          <option value="ru" >Runssian</option>
          <option value="ko" >Korean</option>
          <option value="ja" >Janpenese</option>
        </select>
        <input class="btn btn-primary" id="transForm"  type="submit"  value="翻译">
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TranslateForm',
  data:function(){
    return {
      language,
      textToTranslate:""
    }
  },
  methods:{
    formSubmit:function(e){
      this.$emit("formSubmit",this.textToTranslate,this.language);
      e.preventDefault();
    }
  },
  created:function(){
    this.language="en";
  }
}
</script>

<style>
  #transForm{
    border-radius:10px;
    border:1px #ccc solid;
  }

</style>
