import { axios } from '@/utils/request';

// 获取优惠券列表
export function getCouponList (params) {
    return axios({
        url: '/coupon/CouponList',
        method: 'get',
        params
    })
}

// 添加编辑优惠券
export function addCoupon (data) {
    return axios({
        url: '/coupon/addCoupon',
        method: 'post',
        data
    })
}

// 编辑优惠券获取详情
export function updateCoupon (params) {
    return axios({
        url: '/coupon/couponEdit',
        method: 'get',
        params
    })
}

// 优惠券状态改变
export function batchCouponStatus (params) {
    return axios({
        url: '/coupon/batchCouponStatus',
        method: 'get',
        params
    })
}

// 优惠券列表详情
export function getCouponDetails (params) {
    return axios({
        url: '/coupon/couponDetails',
        method: 'get',
        params
    })
}