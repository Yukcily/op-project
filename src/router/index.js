import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login'
import Home from '@/components/common/Home'
import RoleOrder from '@/components/page/RoleOrder'
import ApplyPermission from '@/components/page/ApplyPermission'
import AuditTable from '@/components/page/AuditTable'
import AllTable from '@/components/page/AllTable'


Vue.use(Router)

const router = new Router({
  mode: 'history', //利用h5history特性,去掉#
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: '/roleorder',
          component: RoleOrder,
        },
        {
          path: '/applypermission',
          component: ApplyPermission,
        },
        {
          path: '/audittable',
          component: AuditTable,
        },
        {
          path: '/alltable',
          component: AllTable,
        },
      ]
    },
    {
      path: '/login',
      component: Login,
    },
  ]
})
// router.beforeEach((to, from, next) => {
//   if (to.name === 'HelloWorld') {
//     next('/login')
//   }
//   next()
// })

export default router
