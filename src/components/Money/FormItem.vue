<template>
  <div>
    <label class="formItem">
      <span class="name">{{this.fileName}}</span>
      <input type="text"
             :value="value"
             @input="onValueChanged($event.target.value)"
             :placeholder="placeholder"/>
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue{
    @Prop({default:''}) readonly value!: string;
    @Prop({required:true}) fileName!: string;
    @Prop() placeholder?: string;
    onValueChanged(Value: string){
      this.$emit('update:value',Value);
    }
  }
</script>

<style lang="scss" scoped>
  .formItem {
    font-size: 14px;
    padding-left: 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      height: 40px;
      flex-grow: 1;
      border: none;
      background: transparent;
      padding-right: 16px;
    }
  }
</style>