import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
  create(record: RecordItem){
    const record2: RecordItem = clone(record); //深拷贝
    record2.createdAt = this.GMTToStr();
    this.data.push(record2);
  },
  //转换为中国时间
  GMTToStr() {
    const date = new Date();
    return date.getFullYear() + '-' +
      (date.getMonth() + 1) + '-' +
      date.getDate() + ' ' +
      date.getHours() + ':' +
      date.getMinutes() + ':' +
      date.getSeconds();
  }
};

export default recordListModel;