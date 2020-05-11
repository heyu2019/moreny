<template>
  <ul class="types">
    <li :class="{[classPrefix+'-item']:classPrefix,selected:value==='-'}"
        @click="selectedType('-')">支出
    </li>
    <li :class="{[classPrefix+'-item']:classPrefix,selected:value==='+'}"
        @click="selectedType('+')">收入
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  //文档提示更智能
  //不能随便写toString
  //编译报错
  @Component
  export default class Types extends Vue {
    @Prop(String) readonly value!: string;
    @Prop(String) classPrefix?: string;

    //type = '-'; //'-'表示支出 '+'表示收入
    selectedType(type: string) {//type只能是'-'或者'+'
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknow');
      }
      this.$emit('update:value', type);
    }
  }
  /*  export default {
      name: 'types',
      data() {
        return {
          type: '-' //'-'表示支出 '+'表示收入
        }
      },
      methods: {
        selectedType(type) {
          if (type !== '-' && type !== '+') {
            throw new Error('type is unknow')
          }
          this.type = type
        }
      }
    };*/
</script>

<style lang="scss" scoped>
  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;

    > li {
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