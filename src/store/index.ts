import Vue from 'vue';
import Vuex, {Store} from 'vuex';
import clone from '@/lib/clone';
import createID from '@/lib/idCreater';

Vue.use(Vuex);
type RooTState = {
  recordList: RecordItem[];
  tagList:  Tag[];
  currentTag?: Tag;
}
const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
    currentTag: undefined
  }as RooTState,
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
    },

    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },

    createTag(state, name: string) {
      const id = createID().toString();
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert('标签重复');
        return 'duplicated';
      }
      state.tagList.push({id, name: name});
      store.commit('saveTags');
      window.alert('创建标签成功');
      return 'success';
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    setCurrentTag(state,id: string){
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    }
  },
});

export default store;
