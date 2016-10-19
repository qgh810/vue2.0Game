// var configRouter = function (router) {
//   router.map({
//
//     // 404页面
//     '*': {
//       component: require('./views/index.vue')
//     },
//     // 主页
//     '/index': {
//       component: require('./views/index.vue')
//     }
//   })
//   router.redirect({
//     '/': '/index'
//   })
// }
const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: require('./views/index.vue') },
  { path: '/game', component: require('./views/game.vue') }
]

export default (VueRouter) => {
  let router = new VueRouter({
    routes
  })
  return router
}
