let layout = () => import(/* webpackChunkName: "layout" */"@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属

// import baseForm from "./modules/1-base-form.js"
// import baseTable from "./modules/2-base-table.js"
// import otherTable from "./modules/3-other-table.js"
// import panel from "./modules/4-panel.js"
// import file from "./modules/5-file.js"
// import alert from "./modules/6-alert.js"
// import svgIcon from "./modules/7-svgIcon.js"
// import fastCopy from "./modules/8-fastCopy.js"
// import tagsView from "./modules/9-tagsView.js"
// import vCharts from "./modules/10-vCharts.js"
// import elementUi from "./modules/11-element-ui.js"
// import print from "./modules/12-print.js"
// import base from "./modules/13-base.js"
// import axios from "./modules/14-axios.js"

import {status} from "./modules/status.js"
const routes = [{
    path: '/',
    redirect: '/home',
    component: layout,
    children: [{
        path: 'home',
        name: 'home',
        component: () => import('../views/realHome.vue')
      }, {
        path: 'eidtGuarantee/:id?',
        name: 'eidtGuarantee',
        component: () => import('../views/1-steps.vue')
      }, {
        path: 'myGuarantee',
        name: 'myGuarantee',
        component: () => import('../views/2-myGuarantee.vue')
      }, {
        path: 'checkGuarantee',
        name: 'checkGuarantee',
        component: () => import('../views/3-checkGuarantee.vue')
      }, {
        path: 'settlementOfClaims',
        name: 'settlementOfClaims',
        component: () => import('../views/4-settlementOfClaims.vue')
      }, {
        path: 'info',
        name: 'info',
        component: () => import('../views/5-info.vue')
      }

    ]
  },

	...status,//状态和登录页
	

]

export default routes
