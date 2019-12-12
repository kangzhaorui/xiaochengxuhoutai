// api/user.js
import { axios } from '@/utils/request';

// 获取商品列表
export function queryGoodsList (params) {
  return axios({
      url: '/goods/getGoodsList',
      method: 'get',
      params
  })
}

// 查询单个商品详情
export function queryGoodsOne (params) {
  return axios({
      url: '/goods/goodsDetails',
      method: 'get',
      params
  })
}

// 添加商品
export function addGoodsOne (data) {
  return axios({
      url: '/goods/addGoods',
      method: 'post',
      data
  })
}

// 添加商品规格
export function addGoodsSku (data) {
  return axios({
      url: '/goods/addSku',
      method: 'post',
      data
  })
}

// 修改商品顺序
export function updateGoodsSort (params) {
  return axios({
      url: '/goods/sortGood',
      method: 'get',
      params
  })
}

// 查询商品分类列表
export function queryGoodsTypeList (params) {
  return axios({
      url: '/goodType/typeList',
      method: 'get',
      params
  })
}

// 修改商品分类
export function updateGoodsType (data) {
  return axios({
      url: '/goodType/updateType',
      method: 'post',
      data
  })
}

// 添加商品分类
export function addGoodsType (data) {
  return axios({
      url: '/goodType/addType',
      method: 'post',
      data
  })
}

// 删除商品分类
export function deleteGoodsType (params) {
  return axios({
      url: '/goodType/typeDelete',
      method: 'get',
      params
  })
}