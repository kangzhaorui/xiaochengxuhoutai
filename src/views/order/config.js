export const listColumns = [
  {
    title: '订单号',
    dataIndex: 'number',
  },
  {
    title: '下单时间',
    dataIndex: 'time',
  },
  {
    title: '订单状态',
    dataIndex: 'status',
  },
  {
    title: '商品信息',
    key: 'info',
    width: '30%',
    scopedSlots: { customRender: 'info' },
  },
  {
    title: '支付金额',
    dataIndex: 'payAmount'
  },
  {
    title: '操作',
    key: 'action',
    width: 200,
    scopedSlots: { customRender: 'action' },
  }
]

export function listData() {
  let ls = [];
  for (let i = 0; i < 100; i++) {
    ls.push({
      number: '20170515913508_' + i,
      time: '2019-10-10 12:00',
      status: '订单状态',
      payAmount: '支付金额',
      info: [{
        name: 'YOHO有货潮牌Into The Rainbow 水洗牛仔卡通印花连衣裙',
      }, {
        name: '新品男士皮夹克男士修身纯色拉链外套青年皮衣短款外套潮017',
      }, {
        name: 'YOHO有货潮牌Into The Rainbow 水洗牛仔卡通印花连衣裙',
      }]
    })
  }
  return ls
}

export const shipColumns = [
  {
    title: '商品名称',
    dataIndex: 'info',
    scopedSlots: { customRender: 'info' },
  },
  {
    title: '规格',
    dataIndex: 'unitpr'
  },
  {
    title: '单价 (元)',
    dataIndex: 'unitprice'
  },
  {
    title: '购买数量',
    dataIndex: 'buy',
  },
  {
    title: '发货数量',
    dataIndex: 'ship',
  },
  {
    title: '小计 (元)',
    dataIndex: 'subtotal',
  }
]

export function shipData() {
  let ls = [];
  for (let i = 0; i < 3; i++) {
    ls.push({
      unitpr: '规格',
      unitprice: 'asdjgl' + i,
      buy: '120.45',
      ship: '122.21',
      subtotal: '125.22',
      number: '20170515913508_' + i,
      name: 'YOHO有货潮牌Into The Rainbow 水洗牛仔卡通印花连衣裙',
      url: 'https://gd1.alicdn.com/imgextra/i1/1988964657/TB2GEFwd7.HL1JjSZFuXXX8dXXa_!!1988964657.jpg_400x400.jpg',
    })
  }
  return ls
}


export const returnformColumns = [
  {
    title: '退货单号',
    dataIndex: 'number',
  },
  {
    title: '退款金额(元)',
    dataIndex: 'payAmount'
  },
  {
    title: '申请时间',
    dataIndex: 'time',
  },
  {
    title: '订单编号',
    dataIndex: 'orderNumber',
  },
  {
    title: '订单状态',
    dataIndex: 'status',
  },
  {
    title: '会员名',
    dataIndex: 'username'
  },
  {
    title: '处理状态',
    dataIndex: 'zmstatus',
  },
  {
    title: '处理时间',
    dataIndex: 'zmTime',
  },
  {
    title: '操作',
    key: 'action',
    width: 120,
    scopedSlots: { customRender: 'action' },
  }
]

export function returnformData() {
  let ls = [];
  for (let i = 0; i < 25; i++) {
    ls.push({
      number: '20170515913508_' + i,
      payAmount: 125.03,
      time: '2017-05-15 15:45:03',
      orderNumber: '2017051598_' + i,
      status: '订单状态' + i,
      zmstatus: '处理状态' + i,
      zmTime: '2017-05-15 15:45:03',
      username: '会员名:小兔兔'
    })
  }
  return ls
}

export const returnDeColumns = [
  {
    title: '商品名称',
    dataIndex: 'info',
    scopedSlots: { customRender: 'info' },
  },
  {
    title: '规格',
    dataIndex: 'unitpr'
  },
  {
    title: '单价 (元)',
    dataIndex: 'unitprice'
  },
  {
    title: '下单数量',
    dataIndex: 'buy',
  },
  {
    title: '小计 (元)',
    dataIndex: 'subtotal',
  },
  {
    title: '优惠金额',
    dataIndex: 'diPrice',
  },
  {
    title: '支付金额',
    dataIndex: 'payPrice',
  },
  {
    title: '退货数量',
    dataIndex: 'thBuy',
  },
  {
    title: '退货金额',
    dataIndex: 'thPrice',
  }
]

export function returnDeData() {
  let ls = [];
  for (let i = 0; i < 3; i++) {
    ls.push({
      unitpr: '规格',
      unitprice: 'asdjgl' + i,
      subtotal: '125.22',
      buy: '120',
      diPrice: '122.21',
      payPrice: '45',
      thBuy: '455666',
      thPrice: '899',
      number: '20170515913508_' + i,
      name: 'YOHO有货潮牌Into The Rainbow 水洗牛仔卡通印花连衣裙',
      url: 'https://gd1.alicdn.com/imgextra/i1/1988964657/TB2GEFwd7.HL1JjSZFuXXX8dXXa_!!1988964657.jpg_400x400.jpg',
    })
  }
  return ls
}


export const exchangeColumns = [
  {
    title: '换货单号',
    dataIndex: 'number',
  },
  {
    title: '退款金额(元)',
    dataIndex: 'payAmount'
  },
  {
    title: '申请时间',
    dataIndex: 'time',
  },
  {
    title: '订单编号',
    dataIndex: 'orderNumber',
  },
  {
    title: '订单状态',
    dataIndex: 'status',
  },
  {
    title: '会员名',
    dataIndex: 'username'
  },
  {
    title: '处理状态',
    dataIndex: 'zmstatus',
  },
  {
    title: '处理时间',
    dataIndex: 'zmTime',
  },
  {
    title: '操作',
    key: 'action',
    width: 120,
    scopedSlots: { customRender: 'action' },
  }
]

export function exchangeData() {
  let ls = [];
  for (let i = 0; i < 25; i++) {
    ls.push({
      number: '20170515913508_' + i,
      payAmount: 125.03,
      time: '2017-05-15 15:45:03',
      orderNumber: '2017051598_' + i,
      status: '订单状态' + i,
      zmstatus: '处理状态' + i,
      zmTime: '2017-05-15 15:45:03',
      username: '会员名:小兔兔'
    })
  }
  return ls
}


export const exchangeDeColumns = [
  {
    title: '商品名称',
    dataIndex: 'info',
    scopedSlots: { customRender: 'info' },
  },
  {
    title: '规格',
    dataIndex: 'unitpr'
  },
  {
    title: '换货数量',
    dataIndex: 'buy',
  }
]


export const paragraphColumns = [
  {
    title: '退款单号',
    dataIndex: 'number',
  },
  {
    title: '退款金额(元)',
    dataIndex: 'payAmount'
  },
  {
    title: '申请时间',
    dataIndex: 'time',
  },
  {
    title: '订单编号',
    dataIndex: 'orderNumber',
  },
  {
    title: '订单状态',
    dataIndex: 'status',
  },
  {
    title: '会员名',
    dataIndex: 'username'
  },
  {
    title: '处理状态',
    dataIndex: 'zmstatus',
  },
  {
    title: '处理时间',
    dataIndex: 'zmTime',
  },
  {
    title: '操作',
    key: 'action',
    width: 120,
    scopedSlots: { customRender: 'action' },
  }
]
