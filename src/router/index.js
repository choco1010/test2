// import AboutUs from '../views/AboutUs.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const history = createWebHashHistory()
const routes = [
 
  // backend
  {
    path: '/admin_login',
    name: 'AdminLogin',
    component: () => import('../views/AdminLogin.vue'),
    meta: {
      layout: 'Admin'
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta: {
      layout: 'Admin'
    }
  },
  {
    path: '/admin_member',
    name: 'AdminMember',
    component: () => import('../views/Member.vue'),
    meta: {
      layout: 'Admin'
    }
  },
  {
    path: '/admin_type',
    name: 'AdminType',
    component: () => import('../views/Type.vue'),
    meta: {
      layout: 'Admin'
    }
  },
  {
    path: '/admin_product',
    name: 'AdminProduct',
    component: () => import('../views/Product.vue'),
    meta: {
      layout: 'Admin'
    }
  },
  {
    path: '/admin_order',
    name: 'AdminOrder',
    component: () => import('../views/Order.vue'),
    meta: {
      layout: 'Admin'
    }
  },
  {
    path: '/admin_category',
    name: 'AdminCategory',
    component: () => import('../views/Category.vue'),
    meta: {
      layout: 'Admin'
    }
  },
  {
    path: '/admin_article',
    name: 'AdminArticle',
    component: () => import('../views/Article.vue'),
    meta: {
      layout: 'Admin'
    }
  },
  {
    path: '/admin_res',
    name: 'AdminRes',
    component: () => import('../views/AdminRes.vue'),
    meta: {
      layout: 'Admin'
    }
  },
  {
    path: '/admin_account',
    name: 'AdminAccount',
    component: () => import('../views/Account.vue'),
    meta: {
      layout: 'Admin'
    }
  },
  
  {
    path: '/admin_panel',
    name: 'AdminPanel',
    component: () => import('../views/AdminPanel.vue'),
    meta: {
      layout: 'Admin'
    }
  },

]
const router = createRouter({
  linkActiveClass: 'active',
  history,
  routes
})

export { router }
