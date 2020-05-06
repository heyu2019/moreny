type RecordItem = {
  tags: string[];  //在tags之后打问号代表可以不设置tags的值
  notes: string;
  type: string;
  amount: number;
  createdAt?: string; //除了写数据类型外还可以写类（构造函数）
} //用于记录各组件的数据
type Tag = {
  id: string;
  name: string;
}
type tagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated';//success 表示成功 duplicated表示标签名重复
  save: () => void;
  remove: (id: string) => boolean;
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
}
interface Window {
  tagList: Tag[];
}