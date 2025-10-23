import { useEffect, useState } from 'react';
import { Button, Input, Pagination, Spin } from 'antd';
import {
  AppstoreOutlined,
  EyeOutlined,
  FilterOutlined,
  PaperClipOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import classNames from 'classnames';
import styles from './index.less';

const APIHub = () => {
  const [state, setState] = useState<{
    list: any[];
    total: number;
  }>({
    list: [],
    total: 0,
  });
  const [tag, setTag] = useState(1);
  const [loading, setLoading] = useState<boolean | undefined>(false);

  // 获取列表
  const queryData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const { list, total } = state;

  useEffect(() => {
    queryData();
  }, [tag]);

  return (
    <div className={styles.container}>
      <div className={styles.topSearch}>
        <div>
          <Input style={{ width: 485 }} placeholder="输入你的API名或关键字" />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            style={{ background: '#008ff8', fontSize: 18 }}
          >
            探索
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.tagTitle}>
            <FilterOutlined style={{ color: '#1890ffff', marginRight: 5 }} />
            API分类
          </div>
          <div className={styles.tagBox}>
            <div
              className={classNames([
                styles.tagItem,
                tag === 1 && styles.active,
              ])}
            >
              <span onClick={() => setTag(1)}>
                <AppstoreOutlined
                  style={{ color: '#606266', marginRight: 10 }}
                />
                全部
              </span>
            </div>
            <div
              className={classNames([
                styles.tagItem,
                tag === 2 && styles.active,
              ])}
            >
              <span onClick={() => setTag(2)}>生活社交</span>
            </div>
            <div
              className={classNames([
                styles.tagItem,
                tag === 3 && styles.active,
              ])}
            >
              <span onClick={() => setTag(3)}>电商购物</span>
            </div>
            <div
              className={classNames([
                styles.tagItem,
                tag === 4 && styles.active,
              ])}
            >
              <span onClick={() => setTag(4)}>人工智能</span>
            </div>
            <div
              className={classNames([
                styles.tagItem,
                tag === 5 && styles.active,
              ])}
            >
              <span onClick={() => setTag(5)}>金融理财</span>
            </div>
            <div
              className={classNames([
                styles.tagItem,
                tag === 6 && styles.active,
              ])}
            >
              <span onClick={() => setTag(6)}>物联网</span>
            </div>
            <div
              className={classNames([
                styles.tagItem,
                tag === 7 && styles.active,
              ])}
            >
              <span onClick={() => setTag(7)}>企业服务</span>
            </div>
            <div
              className={classNames([
                styles.tagItem,
                tag === 8 && styles.active,
              ])}
            >
              <span onClick={() => setTag(8)}>云计算</span>
            </div>
            <div
              className={classNames([
                styles.tagItem,
                tag === 9 && styles.active,
              ])}
            >
              <span onClick={() => setTag(9)}>气象水利</span>
            </div>
            <div
              className={classNames([
                styles.tagItem,
                tag === 10 && styles.active,
              ])}
            >
              <span onClick={() => setTag(10)}>公共数据</span>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Spin spinning={loading}>
            <div className={styles.box}>
              {new Array(18).fill(1).map((item, index) => (
                <div className={styles.item} key={index}>
                  <div className={styles.itemData}>
                    <img src="/download.png" alt="" />
                    <div className={styles.info}>
                      <div>SQL测试</div>
                      <div>
                        <EyeOutlined />
                        &nbsp;
                        <span>35</span>
                      </div>
                      <div>
                        <span>简介：</span>
                        查询用户列表进行数据模型处理，拆分、拼接、截取
                      </div>
                    </div>
                  </div>
                  <div className={styles.itemInfo}>
                    <span>
                      <AppstoreOutlined style={{ marginRight: 5 }} />
                      云计算
                    </span>
                    <span>
                      <PaperClipOutlined style={{ marginRight: 5 }} />
                      详情
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Spin>
          <div className={styles.page}>
            <Pagination
              defaultCurrent={1}
              defaultPageSize={18}
              total={63}
              showSizeChanger={false}
            />
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>粤ICP备2021053436号</div>
    </div>
  );
};

export default APIHub;
