import routes from '@/config/router'

function generate(v) {
  return v.map(a => {
    let v = a[0] === false ? [a[1], a[2], a[3], a[4], a[0]] : a;
    let children = v[3] ? generate(v[3]) : undefined;
    return {
      path: v[0],
      name: v[0].replace(/\//g, '_'),
      component: () => import('@/' + v[1]),
      meta: v[2] || {},
      children,
      redirect: v[4] || (children ? children[0] : undefined),
      hidden: a[0] === false
    }
  })
}

export default generate(routes)