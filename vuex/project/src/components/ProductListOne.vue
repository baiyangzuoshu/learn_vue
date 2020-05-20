<template>
    <div id="ProductListOne">
      <ul >
        <li  v-for="product in saleProducts">
          <span >{{product.name}}</span>
          <span >${{product.price}}</span>
        </li>
      </ul>
      <button @click="reducePrice(10)">商品降价</button>
    </div>
</template>

<script>
export default {
  computed:{
    products(){
      return this.$store.state.products
    },
    saleProducts(){
      return this.$store.getters.saleProducts;
    }
  },
  methods:{
    reducePrice:function(amount){
      //this.$store.commit("reducePrice");
      this.$store.dispatch("reducePrice",amount);
    }
  }
}
</script>

<style scoped>
#ProductListOne{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#ProductListOne ul{
    padding: 0;
}
#ProductListOne li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
