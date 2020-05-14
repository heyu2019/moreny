<template>
  <ul class="tabs" :class="{[classPrefix+'-tabs']:classPrefix}">
    <li v-for="item in dataSource"
        :class="liClass(item)"
        :key="item.value"
        @click="selected(item)"
        class="tabs-item">
      {{item.text}}
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  type DataSourceItem = { text: string; value: string };
  @Component
  export default class Tabs extends Vue {
    @Prop({required: true, type: Array})
    dataSource!: DataSourceItem[];
    @Prop(String) readonly value!: string;
    @Prop(String) classPrefix?: string;

    liClass(item: DataSourceItem) {
      return {
        selected: item.value === this.value
        , [this.classPrefix + '-tabs-item']: this.classPrefix
      };
    }

    selected(item: DataSourceItem) {

      this.$emit('update:value', item.value);
    }
  }
</script>

<style lang="scss" scoped>
  .tabs {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;

    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 64px;

      &.selected {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: #333333;
        }
      }
    }
  }
</style>