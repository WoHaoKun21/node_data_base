import { Route } from '@ant-design/pro-layout/lib/typings';

const routes: Route[] = [
  { path: '/', redirect: '/hub', hideInMenu: true },
  {
    name: 'API Hub',
    path: '/hub',
    routes: [
      {
        path: '/hub',
        redirect: '/hub/apiHub',
      },
      {
        name: '我的服务',
        path: '/hub/apiHub',
        component: './Hub/APIHub',
        hideInMenu: true,
      },
      {
        name: '我的应用',
        path: '/hub/apiInfo',
        component: './Hub/APiInfo',
        hideInMenu: true,
      },
    ],
  },
  {
    name: '工作台',
    path: '/workbench',
    component: './Workbench',
  },
  {
    name: '服务管理',
    path: '/service',
    component: './ServiceCenter',
  },
  {
    name: '个人中心',
    path: '/personal',
    component: './PersonalCenter',
  },
  {
    name: '关于',
    path: '/about',
    component: './About',
  },
];

export default routes;
