type RecordItem = {
  tags: string[];  //在tags之后打问号代表可以不设置tags的值
  notes: string;
  type: string;
  amount: number;
  createdAt?: string; //除了写数据类型外还可以写类（构造函数）
} //用于记录各组件的数据