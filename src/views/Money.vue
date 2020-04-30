<template>
  <layout class-prefix="layout">
    {{record}}
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
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
  import {Component, Watch} from 'vue-property-decorator';
  //数据库升级，可写可不写代码(版本升级)
  /*  const version = window.localStorage.getItem('version') || '0';
    const recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    if (version === '0.0.1') {
      //数据库升级，数据迁移
      recordList.forEach((record: { createdAt: Date; }) => {
        record.createdAt = new Date(2020, 0, 1);
      });
      //保存数据
      window.localStorage.setItem('recordList',JSON.stringify(recordList))
    }
    window.localStorage.setItem('version', '0.0.2');*/
  type Record = {
    tags: string[];  //在tags之后打问号代表可以不设置tags的值
    notes: string;
    type: string;
    amount: number;
    createdAt?: string; //除了写数据类型外还可以写类（构造函数）
  } //用于记录各组件的数据

  @Component({
    components: {Tags, Notes, Types, NumberPad}
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行'];
    recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    record: Record = {tags: [], notes: '', type: '-', amount: 0, createdAt: ''};

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);  //用于可能出现小数点的清空
    }

    saveRecord() {
      const record2: Record = JSON.parse(JSON.stringify(this.record)); //深拷贝
      record2.createdAt = this.GMTToStr();
      this.recordList.push(record2);
    }

    @Watch('recordList')
    onRecordChange() {
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
    }

    //转换为中国时间
    GMTToStr() {
      const date = new Date();
      const Str = date.getFullYear() + '-' +
        (date.getMonth() + 1) + '-' +
        date.getDate() + ' ' +
        date.getHours() + ':' +
        date.getMinutes() + ':' +
        date.getSeconds();
      return Str;
    }
  }
</script>
<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse; //通过倒转实现tags的空隙
  }
</style>