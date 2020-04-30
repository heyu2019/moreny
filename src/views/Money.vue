<template>
  <layout class-prefix="layout">
    {{record}}
    <NumberPad @update:value="onUpdateAmount"/>
    <Types :value.sync="record.type"/>
    <notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';

  type Record = {
    tags: string[];  //在tags之后打问号代表可以不设置tags的值
    notes: string;
    type: string;
    amount: number;
  } //用于记录各组件的数据

  @Component({
    components: {Tags, Notes, Types, NumberPad}
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行'];
    record: Record = {tags: [], notes: '', type: '+', amount: 0};

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);  //用于可能出现小数点的清空
    }
  }
</script>
<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse; //通过倒转实现tags的空隙
  }
</style>