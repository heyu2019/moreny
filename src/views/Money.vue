<template>
  <layout class-prefix="layout">
    <NumberPad/>
    <Types/>
    <notes/>
    <Tags/>
  </layout>
</template>

<script lang="ts">
  import NumberPad from '@/components/NumberPad.vue';
  import Types from '@/components/Types.vue';
  import Notes from '@/components/Notes.vue';
  import Tags from '@/components/Tags.vue';
  export default {
    name: 'money',
    components: {Tags, Notes, Types, NumberPad},
  };
</script>
<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse; //通过倒转实现tags的空隙
  }
</style>