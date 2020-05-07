<template>
  <div>
    <router-view/>
  </div>
</template>
<script lang="ts">
  import store from '@/store/index2';

  export default {
    data() {
      return {
        store: store
      };
    }
  };
</script>
<style lang="scss">
  @import "~@/assets/style/helper.scss";
  @import "~@/assets/style/reset.scss";

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
    line-height: 1.5;
    font-family: $fonts-hei;
    font-size: 16px;
    background: #f5f5f5;
  }
</style>
