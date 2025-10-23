import { Route } from '@ant-design/pro-layout/lib/typings';

const routes: Route[] = [
  { path: '/', redirect: '/excel', hideInMenu: true },
  {
    name: 'API Hub',
    path: '/excel',
    component: './ExcelReader',
  },
  {
    name: '第二个',
    path: '/excel2',
    component: './ExcelReader',
  },
];

export default routes;
