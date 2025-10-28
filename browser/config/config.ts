import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  hash: true,
  layout: {},
  routes,
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  theme: {
    // 用来配置全局的antd样式
    // 'root-entry-name': 'variable', // 全局样式的入口文件
    'primary-color': '#008ff8', // 全局主色
    'link-color': '#008ff8', // 链接色
    'success-color': '#60ad82', // 成功色
    'warning-color': '#f1c40f', // 警告色
    'error-color': '#e66d73', // 错误色
    'primary-1': '#eaedff', // 背景色
    'primary-2': '#e4e8fe', // 背景色
    'primary-5': '#008ff8',
    'primary-color-active': '#008ff8', // 点击色
    'primary-color-hover': '#008ff8', // 划入色
    '@font-size': '14px', // 主字号
  },
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:80',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  manifest: {
    basePath: '/',
  },
  history: {
    type: 'browser',
    options: {
      basename: '/',
      trailingSlash: false,
    },
  },
  fastRefresh: {},
  nodeModulesTransform: { type: 'none' },
  exportStatic: {},
});
