export const listColumns = [
  {
    title: '排序',
    dataIndex: 'g_sort',
  },
  {
    title: '商品',
    dataIndex: 'g_name',
    width: 440,
    // scopedSlots: { customRender: 'g_name' },
  },
  {
    title: '商品编码',
    dataIndex: 'g_order_no',
  },
  {
    title: '价格',
    dataIndex: 'g_price',
  },
  {
    title: '商品状态',
    dataIndex: 'g_status',
  },
  {
    title: '库存',
    dataIndex: 'g_stock'
  },
  {
    title: '销量',
    dataIndex: 'salf'
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
      sort: i,
      numbering: 1 + i,
      price: 120 + i,
      status: '商品状态',
      inStock: '库存',
      sales: '销量',
      name: '气浮机养殖污水处理设备一体化溶气平流刮油机刮渣 屠宰工业印染',
      url: '//gd3.alicdn.com/imgextra/i3/2324674395/O1CN013f8Vsg1iKxEggfYsy_!!2324674395.jpg'
    })
  }
  return ls
}


export const categoriesColumns = [
  {
    title: '图片',
    dataIndex: 'url',
    scopedSlots: { customRender: 'image' },
  },
  {
    title: '分类名称',
    dataIndex: 'name'
  },
  {
    title: '显示顺序',
    dataIndex: 'sort',
    width: 180,
  },
  {
    title: '操作',
    key: 'action',
    width: 160,
    scopedSlots: { customRender: 'action' },
  }
]
export function categoriesData() {
  let ls = [];
  for (let i = 0; i < 20; i++) {
    ls.push({
      key: i,
      sort: i,
      name: '气浮机养殖污水处理设备一体化溶气平流刮油机刮渣 屠宰工业印染',
      url: '//gd3.alicdn.com/imgextra/i3/2324674395/O1CN013f8Vsg1iKxEggfYsy_!!2324674395.jpg'
    })
  }
  return ls
}


export const shiptempColumns = [
  {
    title: '运送到',
    key: 'shipto',
    scopedSlots: { customRender: 'shipto' },
  },
  {
    title: '首件(件)',
    key: 'firstitem',
    scopedSlots: { customRender: 'firstitem' },
  },
  {
    title: '续件(件)',
    key: 'continuation',
    scopedSlots: { customRender: 'continuation' },
  },
  {
    title: '续费(元)',
    key: 'renewal',
    scopedSlots: { customRender: 'renewal' },
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  }
]