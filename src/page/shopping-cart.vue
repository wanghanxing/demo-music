<template>
  <div class="shopping-cart">
    <mt-header fixed title="shopping-cart"></mt-header>
    <div class="cart_text">
      <mt-field label="姓名" placeholder="请输入姓名" v-model="username"></mt-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopping-cart",
  data() {
    return {
      username: ""
    };
  }
};
</script>

<style lang='scss'>
.shopping-cart {
  .mint-header.is-fixed {
    height: 200px;
  }
  .cart_text {
    margin-top: 200px;
    height: 100%;
    .mint-field .mint-cell-title {
      width: 200px;
      color: #666;
      padding: 0 20px;
      text-align: center;
    }
    .mint-field-core {
      height: 200px;
      border-bottom: 1px solid #cccccc;
    }
  }
}
</style>