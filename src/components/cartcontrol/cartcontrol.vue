<template>
  <div class="cartcontrol">
    <div class="cart-decrease icon-remove_circle)outline" v-show="food.count>0"></div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    food: {
      type: Object
    }
  },
  created() {
    console.log(this.food);
  }
};
</script>

<style lang="stylus">
.cartcontrol
  .cart-decrease
    display inine-block
    font-size 0
  .cart-count
    display inline-block
    font-size 0
  .cart-add
    display inline-block
    font-size 0
</style>

