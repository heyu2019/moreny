<template>
  <layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem file-name="备注"
                @update:value="onUpdateNotes"
                placeholder="在这里输入备注"/>
    </div>
    <Tags :data-source="tags" @update:value="onUpdateTags"/>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';
  import store from '@/store/index2';

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

  @Component({
    components: {Tags, FormItem, Types, NumberPad}
  })
  export default class Money extends Vue {
    tags = store.tagList;
    recordList= store.recordList;
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0, createdAt: ''};

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
      store.createRecord(this.record);
    }

  }
</script>
<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse; //通过倒转实现tags的空隙
  }

  .notes {
    padding: 12px 0;
  }
</style>