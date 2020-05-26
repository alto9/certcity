import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const Certificates = () => import('@/views/certificates/Certificates')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'certificates',
          redirect: '/certificates/list',
          name: 'Certificates',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'list',
              name: 'List',
              component: Certificates
            }
          ]
        }
      ]
    }
  ]
}

