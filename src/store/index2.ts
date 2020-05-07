import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const store = {
  //record store
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => recordListModel.create(record),
  //全局变量太多了
  //严重依赖window
  //tagList store
  tagList: tagListModel.fetch(),
  findTag(id: string){
    return this.tagList.filter(t => t.id === id)[0];
  },
  createTag: (name: string) => {
    if (name === '') {
      window.alert('标签名不能为空');
    } else if (name !== null) {
      const message = tagListModel.create(name);
      if (message === 'duplicated') {
        window.alert('标签重复');
      } else if (message === 'success') {
        window.alert('创建标签成功');
      }
    }
  },

  removeTag: (id: string) => {
    return tagListModel.remove(id);
  },

  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  }
};

export default store;