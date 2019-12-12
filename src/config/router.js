

/**
 *  [0] == { path }        ||  [0] == { hidden }
 *  [1] == { meta }        ||  [1] == { path }
 *  [2] == { component }   ||  [2] == { meta }
 *  [3] == { children }    ||  [3] == { component }
 *  [4] == { redirect }    ||  [4] == { children }
 *                         ||  [5] == { redirect }
 */

const config = [

    ['/', 'layouts/BasicLayout', { title: '主页' }, [

        //首页
        ['/index', 'views/index/operating', { title: '首页', icon: 'fund' }],


        // 商品中心
        ['/commodity', 'layouts/BlankLayout', { title: '商品中心', icon: 'shopping' }, [
            ['/commodity/list', 'views/commodity/list', { title: '商品列表' }],
            ['/commodity/add', 'views/commodity/addUp', { title: '添加商品' }],
            [false, '/commodity/up', 'views/commodity/addUp', { title: '编辑商品', routeGo: true }],
            [false, '/commodity/detail', 'views/commodity/detail', { title: '商品详情', routeGo: true }],
            ['/commodity/categories', 'views/commodity/categories', { title: '商品分类' }],
            ['/commodity/shiptemp', 'views/commodity/shiptemp', { title: '运费模板' }],
        ]],

        //订单中心
        ['/order', 'layouts/BlankLayout', { title: '订单中心', icon: 'pushpin' }, [
            ['/order/list', 'views/order/list', { title: '订单列表' }],
            [false, '/order/ship', 'views/order/ship', { title: '订单发货', routeGo: true }],
            [false, '/order/detail', 'views/order/detail', { title: '订单详情', routeGo: true }],
            ['/order/returnform', 'views/order/returnform', { title: '退货单' }],
            [false, '/order/returndetail', 'views/order/returnDe', { title: '退货-详情', routeGo: true }],
            ['/order/exchange', 'views/order/exchange', { title: '换货单' }],
            [false, '/order/exchangede', 'views/order/exchangeDe', { title: '换货-详情', routeGo: true }],
            ['/order/paragraph', 'views/order/paragraph', { title: '退款单' }],
            [false, '/order/paragraphDe', 'views/order/paragraphDe', { title: '退款-详情', routeGo: true }],
        ]],

        //营销中心
        ['/marketing', 'layouts/BlankLayout', { title: '营销中心', icon: 'deployment-unit' }, [
            ['/marketing/coupons', 'views/marketing/coupons', { title: '优惠券列表' }],
            [false, '/marketing/couponsDe', 'views/marketing/couponsDe', { title: '优惠券详情', routeGo: true }],
            ['/marketing/group', 'views/marketing/group', { title: '拼团活动' }],
            [false, '/marketing/groupAdd', 'views/marketing/groupAdd', { title: '创建拼团', routeGo: true }],
            [false, '/marketing/groupDe', 'views/marketing/groupDe', { title: '活动详情', routeGo: true }],
        ]],

        // 其他内容
        ['/setting', 'layouts/BlankLayout', { title: '其他内容', icon: 'form' }, [

            ['/setting/carousel', 'views/setting/carousel', { title: '轮播图设置' }],
            ['/setting/userData', 'views/setting/userData', { title: '用户数据' }],
        ]]


    ]],


    ['/user', 'layouts/UserLayout', { title: '用户' }, [
        ['/user/login', 'views/user/login', { title: '登录' }]
    ]],

    // 错误 页面
    ['*', 'views/404', { title: '404' }],
    ['*/401', 'views/401', { title: '401' }]
]



export default config;