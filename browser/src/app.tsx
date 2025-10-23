// import RightContent from '@/components/RightContent';
import { history } from 'umi';
import { notification } from 'antd';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import type { RequestOptionsInit } from 'umi-request';
import routes from '../config/routes';
import { MethodEnum } from './enums';
import RightContent from './components/RightContent';

const authHeaderInterceptor = (url: string, options: RequestOptionsInit) => {
  const accessToken = window.localStorage.getItem('ACCESS_TOKEN');
  const commonHeaders: any = {};
  if (!options.noAuthorization && accessToken) {
    commonHeaders.authorization = accessToken;
  }
  if (
    !options.upload &&
    options.method?.toUpperCase() === MethodEnum.POST &&
    options.method?.toUpperCase() === MethodEnum.PUT
  ) {
    commonHeaders['Content-Type'] = 'application/json';
  }
  const headers = { ...commonHeaders, ...(options.headers || {}) };
  return {
    url: `${url}`,
    options: { ...options, interceptors: true, headers },
  };
};

const responseInterceptor = async (response: Response, options: any) => {
  if (options.responseType === 'blob') {
    return response;
  }
  const data = await response.clone().json();
  // 登陆过期，存储的token无法使用，进行缓存清除，并跳转回登陆页面
  if (data.code === 401) {
    window.localStorage.clear();
    history.push('/login');
  }
  // ？
  if (data.code == 401) {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('USER_INFO');
  }
  return response;
};

export const request: RequestConfig = {
  prefix: '/api',
  timeout: 15 * 1000,
  timeoutMessage: '请求超时，请稍后重试！',
  requestInterceptors: [authHeaderInterceptor],
  responseInterceptors: [responseInterceptor],
  errorHandler: (error: any) => {
    const { response } = error;
    if (!response) {
      notification.error({ description: '服务异常', message: '' });
    }
    throw error;
  },
};

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = () => {
  return {
    layout: 'top',
    title: 'APi 文档',
    logo: '/comm/logo.png',
    disableContentMargin: false,
    waterMarkProps: { content: '123456789' },
    onPageChange: () => {},
    rightContentRender: () => <RightContent />,
    onMenuHeaderClick: () => history.push('/excel'),
    childrenRender: (children) => <>{children}</>,
    menuDataRender: () => routes,
    headerHeight: 64,
    contentStyle: { margin: '0', padding: '0', height: 'calc(100vh - 64px)' },
  };
};
