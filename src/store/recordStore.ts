import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const data: RecordItem[] | undefined = undefined;


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

const recordStore = {
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  saveRecords() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  createRecord (record: RecordItem)  {
    const record2: RecordItem = clone(record); //深拷贝
    record2.createdAt = GMTToStr();
    this.recordList && this.recordList.push(record2); //this.recordList?.push(record2)
    recordStore.saveRecords();
  },
};
recordStore.fetchRecords();

export default recordStore;