import { PlusOutlined } from '@ant-design/icons';
import {Button, Card, List, message, Tag, Typography, Input} from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from 'umi';
import { queryTypeList,addType } from './service';
import styles from './style.less';
import {IToolType,ToolTypeStatus} from "@al-tool/domain";
import {useState} from "react";
import {TableListItem} from "@/pages/list/table-list/data";
import {ModalForm, ProFormText} from "@ant-design/pro-form";

const { Paragraph } = Typography;
const { Search } = Input;

/**
 * 添加类别
 *
 * @param fields
 */

const handleAdd = async (fields: TableListItem) => {
  const hide = message.loading('正在添加');

  try {
    await addType({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};


const CardList = () => {
  /** 新建窗口的弹窗 */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);

  const { data, loading, run } = useRequest(() => {
    return queryTypeList({
      search: '',
    });
  });

  const list = data?.list || [];

  const content = (
    <div className={styles.pageHeaderContent}>
      <p>
        工具类别新增、修改、删除处理。
      </p>
    </div>
  );

  const extraContent = (
    <div className={styles.extraImg}>
      <img
        alt="这是一个分类"
        src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
      />
    </div>
  );
  const nullData: Partial<IToolType> = {};
  return (
    <PageContainer content={content} extraContent={extraContent}>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        // onSearch={onSearch}
      />
      <div className={styles.cardList}>
        <List<Partial<IToolType>>
          rowKey="id"
          loading={loading}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={[nullData, ...list]}
          renderItem={(item) => {
            if (item && item.id) {
              return (
                <List.Item key={item.id}>
                  <Card
                    hoverable
                    className={styles.card}
                    actions={[<a key="option1">修改</a>, <a key="option2">删除</a>]}
                  >
                    <Card.Meta
                      title={<a>{item.code}</a>}
                      description={
                        <Paragraph className={styles.item} ellipsis={{ rows: 3 }}>
                          {item.name}
                          <br/>
                          <Tag color={item.status === ToolTypeStatus.enable ? 'green' : 'red'}>{item.status === ToolTypeStatus.enable ? '启用' : '停用'}</Tag>
                        </Paragraph>
                      }
                    />
                  </Card>
                </List.Item>
              );
            }
            return (
              <List.Item>
                <Button
                  type="dashed"
                  className={styles.newButton}
                  onClick={() => {
                    handleModalVisible(true);
                  }}>
                  <PlusOutlined /> 新增分类
                </Button>
              </List.Item>
            );
          }}
        />
      </div>
      <ModalForm
        title="新建工具类别"
        width="400px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd(value as TableListItem);
          if (success) {
            handleModalVisible(false);
            run();
          }
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: '编码为必填项',
            },
          ]}
          label="编码"
          width="md"
          name="code"
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: '名称为必填项',
            },
          ]}
          label="名称"
          width="md"
          name="name"
        />
      </ModalForm>
    </PageContainer>
  );
};

export default CardList;
