export const couponsColumns = [
  {
    title: '优惠券名称',
    dataIndex: 'coupons',
  },
  {
    title: '面值(元)',
    dataIndex: 'amount'
  },
  {
    title: '使用条件',
    dataIndex: 'ofuse',
  },
  {
    title: '有效期',
    dataIndex: 'zmTime',
  },
  {
    title: '剩余数量',
    dataIndex: 'amounts'
  },
  {
    title: '领取人/张',
    dataIndex: 'zmstatus',
  },
  {
    title: '已使用',
    dataIndex: 'zms',
  },
  {
    title: '操作',
    key: 'action',
    width: 200,
    scopedSlots: { customRender: 'action' },
  }
]


export function couponsData() {
  let ls = [];
  for (let i = 0; i < 25; i++) {
    ls.push({
      coupons: '会员名:小兔兔',
      amount: '12',
      zmTime: '2017-05-15 15:45:03',
      ofuse: '使用条件',
      amounts: '剩余数量',
      zmstatus: '领取人/张',
      zms: '已使用',
    })
  }
  return ls
}


export const couponsDeColumns = [
  {
    title: '优惠码',
    dataIndex: 'coupons',
  },
  {
    title: 'ID',
    dataIndex: 'ofuse',
  },
  {
    title: '面值(元)',
    dataIndex: 'amount'
  },
  {
    title: '领取数量',
    dataIndex: 'amounts'
  },
  {
    title: '领取日期',
    dataIndex: 'zmTime',
  },
  {
    title: '使用日期',
    dataIndex: 'msTime',
  },
  {
    title: '订单编号',
    dataIndex: 'zmstatus',
  },
  {
    title: '使用状态',
    dataIndex: 'zms',
  }
]


export function couponsDeData() {
  let ls = [];
  for (let i = 0; i < 25; i++) {
    ls.push({
      coupons: '优惠码',
      amount: '12',
      zmTime: '2017-05-15 15:45:03',
      msTime: '2017-05-15 15:45:03',
      ofuse: 'ID',
      amounts: '剩余数量',
      zmstatus: '订单编号',
      zms: '已使用',
    })
  }
  return ls
}



export const GroupColumns = [
  {
    title: '活动名称',
    dataIndex: 'coupons',
  },
  {
    title: '商品',
    dataIndex: 'info',
    scopedSlots: { customRender: 'info' },
  },
  {
    title: '成团人数',
    dataIndex: 'GroupPeople'
  },
  {
    title: '有效期',
    dataIndex: 'msTime'
  },
  {
    title: '状态',
    dataIndex: 'zmTime',
  },
  {
    title: '操作',
    key: 'action',
    width: 200,
    scopedSlots: { customRender: 'action' },
  }
]


export function GroupData() {
  let ls = [];
  for (let i = 0; i < 25; i++) {
    ls.push({
      coupons: '活动名称',
      GroupPeople: '12',
      msTime: '2017-05-15 15:45:03',
      zmTime: '状态'
    })
  }
  return ls
}


export const GroupAddColumns = [{
  title: '商品详情',
  dataIndex: 'coupons',
},
{
  title: '商品',
  dataIndex: 'info',
  scopedSlots: { customRender: 'info' },
},
{
  title: '拼团价',
  dataIndex: 'price'
},
{
  title: '成团人数',
  dataIndex: 'GroupPeople'
},
{
  title: '操作',
  key: 'action',
  width: 200,
  scopedSlots: { customRender: 'action' },
}]



export const groupDeColumns = [{
  title: '商品详情',
  dataIndex: 'info',
  scopedSlots: { customRender: 'info' },
},
{
  title: '成功参与人数',
  dataIndex: 'GroupPeople'
},
{
  title: '参与人ID',
  dataIndex: 'cmid'
},
{
  title: '状态',
  dataIndex: 'zmTime'
}]



export function groupDeData() {
  let ls = [];
  for (let i = 0; i < 25; i++) {
    ls.push({
      coupons: '活动名称',
      GroupPeople: '12',
      cmid: '张先生、张先生45、张先生、123',
      zmTime: '参团成功'
    })
  }
  return ls
}


