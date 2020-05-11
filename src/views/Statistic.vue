<template>
  <layout>
    <Tabs
      class-prefix="type"
      :data-source="typeList"
      :value.sync="type"/>
    <Tabs
      class-prefix="interval"
      :data-source="intervalList"
      :value.sync="interval"/>
  </layout>
</template>

<script lang="ts">
  import Types from '@/components/Money/Types.vue';
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import intervalList from '@/constants/interVal';
  import typeList from '@/constants/typeVal';

  @Component({
    components: {Tabs, Types}
  })
  export default class Statistic extends Vue {
    type = '-';
    interval = 'day';
    intervalList = intervalList
    typeList = typeList;
  }
</script>

<style lang="scss" scoped>
  ::v-deep .type-tabs-item {
    background: white;

    &.selected {
      background: #c4c4c4;

      &::after {
        display: none;
      }
    }
  }
</style>