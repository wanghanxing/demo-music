<template>
  <div class="classification">
    <div class="search">
      <mt-search cancel-text="取消" placeholder="搜索"></mt-search>
    </div>
  </div>
</template>

<script>
export default {
  name: "classification"
};
</script>

<style lang='scss'>
.classification {
  height: 100%;
  width: 100%;
  .search {
      width: 100%;
    height: 200px;
    position: fixed;
    top: 0;
    left: 0;
    .mint-searchbar {
      padding: 20px 20px;
      .mint-searchbar-inner {
        height: 120px;
        padding: 20px 20px;
      }
    }
  }
}
</style>