import { PlusOutlined } from '@ant-design/icons';
import {Button, Card, List, message, Tag, Typography, Input} from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from 'umi';
import { queryTypeList,addType,updateType,statusUpType } from './service';
import styles from './style.less';
import {IToolType,ToolTypeStatus} from "@al-tool/domain";
import {useState, useRef} from "react";
import {TableListItem} from "@/pages/list/table-list/data";
import {ModalForm, ProFormText, ProFormInstance} from "@ant-design/pro-form";

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

/**
 * 修改类别
 *
 * @param fields
 */

const handleUpdate = async (fields: TableListItem) => {
  const hide = message.loading('正在修改');

  try {
    await updateType({ ...fields });
    hide();
    message.success('修改成功');
    return true;
  } catch (error) {
    hide();
    message.error('修改失败请重试！');
    return false;
  }
};

/**
 * 更新启用状态
 * @param id
 * @param status enable 启用->停用 disable 停用->启用
 */
const handleStatusUp = async (id: string,status: string) => {
  const hide = message.loading('正在修改');

  try {
    await statusUpType(status,{id});
    hide();
    message.success('修改成功');
    return true;
  }catch (error) {
    hide();
    message.error('修改失败请重试！');
    return false;
  }
}


const CardList = () => {
  /** 新建窗口的弹窗 */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  /** 修改窗口的弹窗 */
  const [updateModalVisible, handleUModalVisible] = useState<boolean>(false);

  const { data, loading, run } = useRequest((search: string) => {
    return queryTypeList({
      search: search,
    });
  });

  const formRef = useRef<ProFormInstance>();
  const [searchdata,setSearchdata] = useState('');

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
        placeholder="模糊搜索类别"
        allowClear
        enterButton="Search"
        size="large"
        onChange={(e)=>{
          setSearchdata(e.target.value);
        }}
        style={{
          width : '40%',
          maxWidth : '40%',
          padding : '8px'
        }}
        onSearch={(value)=>{run(value)}}
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
                    actions={[<a key="option1" onClick={() => {
                      formRef && formRef.current && formRef.current?.setFieldsValue({...item});
                      handleUModalVisible(true);
                    }}>修改</a>, <a key="option2" onClick={async () => {
                      const success = item && item.id && item.status && await handleStatusUp(item.id,item.status);
                      if (success){
                        run(searchdata);
                      }
                    }}>{item.status === ToolTypeStatus.enable ? '停用' : '启用'}</a>, <a key="option2">删除</a>]}
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
            formRef && formRef.current && formRef.current?.getFieldValue('s');
            run(searchdata);
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
      <ModalForm
        title="修改工具类别"
        width="400px"
        visible={updateModalVisible}
        formRef={formRef}
        onVisibleChange={handleUModalVisible}
        onFinish={async (value) => {
          const success = await handleUpdate(value as TableListItem);
          if (success) {
            handleUModalVisible(false);
            run(searchdata);
          }
        }}
      >
        <ProFormText
          width="md"
          name="id"
          hidden={true}
        />
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
          disabled={true}
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
