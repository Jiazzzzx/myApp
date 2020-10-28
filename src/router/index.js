import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Frame',
      component: () => import("@/views/frame/Frame"),
      children: [
        {
          path: 'vue-module',
          name: 'Vue模块',
          component: () => import("@/views/VueModule/ModuleView"),
          children: [
            {
              path: 'slot-view',
              name: 'Slot插槽',
              component: () => import("@/views/VueModule/SlotView")
            },
            {
              path: 'template-view',
              name: '模板语法',
              component: () => import("@/views/VueModule/TemplateView")
            }
          ]
        },
        {
          path: 'node-module',
          name: 'Node模块',
          component: () => import("@/views/NodeModule/ModuleView"),
          children: [
            {
              path: 'get',
              name: 'GET',
              component: () => import("@/views/NodeModule/get")
            },
            {
              path: 'post',
              name: 'POST',
              component: () => import("@/views/NodeModule/Post")
            }
          ]
        },
        {
          path: 'es-module',
          name: 'ES模块',
          component: () => import("@/views/ESModule/ModuleView"),
          children: [
            {
              path: 'promise',
              name: 'Promise',
              component: () => import("@/views/ESModule/Promise")
            }
          ]
        }
      ]
    }
  ]
})
