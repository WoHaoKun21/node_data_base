import React from 'react';
import { Dropdown, message, Space } from 'antd';
import type { MenuProps } from 'antd';
import {
  BellFilled,
  LogoutOutlined,
  UnlockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { CompassType } from '../Icons';
import styles from './indedx.less';

const RightContent: React.FC = () => {
  const loginOut = async () => {
    const res = await { code: 200, msg: '操作成功' };
    if (res.code === 200) {
      message.success(res.msg);
      localStorage.clear();
    } else {
      message.error(res.msg);
    }
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '修改密码',
      icon: <UnlockOutlined />,
      onClick: () => {
        message.warn('暂无对应跳转操作或页面');
      },
    },
    {
      key: '2',
      label: '退出登录',
      icon: <LogoutOutlined />,
      onClick: loginOut,
    },
  ];

  return (
    <div className={styles.box}>
      <BellFilled style={{ color: '#000', fontSize: 16 }} />
      <CompassType style={{ color: '#000', fontSize: 18 }} />
      <div className={styles.userInfoSelect}>
        <Dropdown menu={{ items }}>
          <Space>
            <UserOutlined style={{ color: '#000', fontSize: 16 }} />
            我好困21
          </Space>
        </Dropdown>
      </div>
    </div>
  );
};

export default RightContent;
