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
      <ol>
        <li v-for="(group,index) in result" :key="index">
          <h3 class="title">{{group.tittle}}</h3>
          <ol>
            <li v-for="item in group.items"
                class="record"
                :key="item.id">
              <span>{{tagString(item.tags)}}</span>
              <span class="notes">{{item.notes}}</span>
              <span>￥{{item.amount}}</span>
            </li>
          </ol>
        </li>
      </ol>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import intervalList from '@/constants/interVal';
  import typeList from '@/constants/typeVal';

  @Component({
    components: {Tabs}
  })
  export default class Statistic extends Vue {
    tagString(tags: Tag[]){
      return tags.length===0?'无': tags.join(',')
    }
    get recordList() {
      return (this.$store.state as RooTState).recordList;
    }

    get result() {
      type hashTableValue = {
        tittle: string; items: RecordList[];
      }
      const {recordList} = this;
      const hashTable: { [key: string]: hashTableValue } = {}; //声明一个空对象的类型
      for (let i = 0; i < recordList.length; i++) {
        const [date, time] = recordList[i].createdAt!.split('T');
        hashTable[date] = hashTable[date] || {tittle: date, items: []};
        hashTable[date].items.push(recordList[i]);
      }
      return hashTable;
    }

    beforeCreate() {
      this.$store.commit('fetchRecordList');
    }

    type = '-';
    interval = 'day';
    intervalList = intervalList;
    typeList = typeList;
  }
</script>

<style lang="scss" scoped>
  ::v-deep {
    .type-tabs-item {
      background: white;

      &.selected {
        background: #c4c4c4;

        &::after {
          display: none;
        }
      }
    }

    .interval-tabs-item {
      height: 48px;
    }
    %item {
      padding: 8px 16px;
      line-height: 24px;
      display: flex;
      justify-content: space-between;
      align-content: center;
    }
    .title {
      @extend %item
    }
    .record {
      background: white;
      @extend %item
    }
    .notes{
      margin-right: auto;
      margin-left: 16px;
      color: #999;
    }
  }
</style>