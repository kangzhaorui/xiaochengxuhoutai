export const carouselColumns = [
  {
    title: '排序',
    dataIndex: 'key'
  },
  {
    title: '广告图',
    dataIndex: 'image',
    width: 260,
    scopedSlots: { customRender: 'image' },
  },
  {
    title: '关联商品',
    dataIndex: 'info',
    scopedSlots: { customRender: 'info' },
  }, {
    title: '操作',
    key: 'action',
    width: 100,
    scopedSlots: { customRender: 'action' },
  }
]


export function carouselDeData() {
  let ls = [];
  for (let i = 0; i < 6; i++) {
    ls.push({
      key: i
    })
  }
  return ls
}

export const userDataColumns = [
  {
    title: '用户名称',
    dataIndex: 'key'
  },
  {
    title: 'openId',
    dataIndex: 'id',
  },
  {
    title: '微信头像',
    dataIndex: 'image',
    scopedSlots: { customRender: 'image' },
  },
  {
    title: '手机号',
    dataIndex: 'teb'
  },
  {
    title: '收货地址',
    dataIndex: 'info'
  },
  {
    title: '购买过的商品',
    key: 'commodity',
    scopedSlots: { customRender: 'commodity' },
  }
]


export function userDataDeData() {
  let ls = [];
  for (let i = 0; i < 12; i++) {
    ls.push({
      key: '用户名' + i,
      id: 'openId' + i,
      teb: '177545666' + i,
      info: '收货地址' + i,
    })
  }
  return ls
}

