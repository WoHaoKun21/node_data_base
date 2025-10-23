import React from 'react';
import { BellFilled, UserOutlined } from '@ant-design/icons';
import { CompassType } from '../Icons';
import styles from './indedx.less';

const RightContent: React.FC = () => {
  return (
    <div className={styles.box}>
      <BellFilled style={{ color: '#000', fontSize: 16 }} />
      <CompassType style={{ color: '#000', fontSize: 18 }} />
      <div className={styles.userInfoSelect}>
        <UserOutlined style={{ color: '#000', fontSize: 16 }} />
        我好困21
      </div>
    </div>
  );
};

export default RightContent;
