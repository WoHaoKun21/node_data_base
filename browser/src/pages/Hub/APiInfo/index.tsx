import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Button, Tooltip } from 'antd';
import { RocketType } from '@/components/Icons';
import { CheckOutlined, CopyOutlined } from '@ant-design/icons';
import ReactCopy from 'react-copy-to-clipboard';
import styles from './index.less';

interface IAPiInfoProps {}

const APiInfo: React.FC<IAPiInfoProps> = () => {
  const [copy, setCopy] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.basicInfo}>
        <h1>基本信息</h1>
        <div className={styles.infoBox}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <div>
                <span>接口编号：</span>
                <p>10003</p>
              </div>
              <div>
                <span>接口名称：</span>
                <p>样例_用户信息脱敏</p>
              </div>
              <div>
                <span>认证方式：</span>
                <p>简单认证</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div>
                <span>上线时间：</span>
                <p>{dayjs().format('YYYY-MM-DD HH:mm')}</p>
              </div>
              <div>
                <span>接口类型：</span>
                <p>表格模式</p>
              </div>
              <div>
                <span>版本号：</span>
                <p>2</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div style={{ width: '100%' }}>
                <span>接口地址：</span>
                <p>
                  GET&nbsp;https://127.0.0.1/api/web/demo/v2/user/encry
                  <span>
                    <Tooltip title={copy ? '复制成功' : '复制'}>
                      <ReactCopy
                        text="https://127.0.0.1/api/web/demo/v2/user/encry"
                        onCopy={() => {
                          setCopy(true);
                          setTimeout(() => setCopy(false), 2000);
                        }}
                      >
                        {copy ? (
                          <CheckOutlined style={{ color: '#82cf50' }} />
                        ) : (
                          <CopyOutlined />
                        )}
                      </ReactCopy>
                    </Tooltip>
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div style={{ width: '100%' }}>
                <span>接口描述：</span>
                <p>用户信息敏感字段数据脱敏</p>
              </div>
            </div>
          </div>
          <div className={styles.submit}>
            <Button
              type="primary"
              icon={<RocketType style={{ fontSize: 20 }} />}
            >
              申请
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.apiInfo}>
        <h2>接口文档</h2>
      </div>
    </div>
  );
};

export default APiInfo;
