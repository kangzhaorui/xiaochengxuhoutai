import { axios } from '@/utils/request';

// 获取订单列表
export function getOrderList (params) {
	return axios({
		url: '/order/orderList',
		method: 'get',
		params
	})
}

// 删除订单（修改订单状态）
export function deleteOrder (params) {
	return axios({
		url: '/order/updateOrderStatus',
		method: 'get',
		params
	})
}

// 订单列表导出
export function orderExport (params) {
	return axios({
		url: '/order/orderExport',
		method: 'get',
		params
	})
}

// 获取订单信息主信息
export function getOrderMessage (params) {
	return axios({
		url: '/order/getOrderMessage',
		method: 'get',
		params
	})
}

// 获取子订单详情
export function getOrderDetails (params) {
	return axios({
		url: '/order/getOrderDetails',
		method: 'get',
		params
	})
}

// 获取订单收货信息
export function getAddressDetails (params) {
	return axios({
		url: '/order/getAddressDetails',
		method: 'get',
		params
	})
}