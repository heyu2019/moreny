import Vue from 'vue';
import Vuex, {Store} from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[]
  },
  mutations: {
    fetchRecordList: function (state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord: function (state, record) {
      const record2: RecordItem = clone(record); //深拷贝
      //转换为中国时间
      function GMTToStr() {
        const date = new Date();
        return date.getFullYear() + '-' +
          (date.getMonth() + 1) + '-' +
          date.getDate() + ' ' +
          date.getHours() + ':' +
          date.getMinutes() + ':' +
          date.getSeconds();
      }

      record2.createdAt = GMTToStr();
      state.recordList.push(record2); //this.recordList?.push(record2)
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList',
        JSON.stringify(state.recordList));
    }
  },
});

export default store;
