<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>money.vue</p>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'money',
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