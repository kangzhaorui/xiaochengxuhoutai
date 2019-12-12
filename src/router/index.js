import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history',
  base: process.env.BASE_URL
})


router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;

