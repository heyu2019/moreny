<template>
  <div class="nav-wrapper">
    <div class="content">
      <div>
        xxx.vue
        <Nav/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'statistic',
  };
</script>

<style lang="scss" scoped>
  .nav-wrapper {
    border: 1px solid #ff6600;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .content {
    flex-grow: 1;
    overflow: auto;
  }
</style>