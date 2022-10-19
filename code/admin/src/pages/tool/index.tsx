import { PlusOutlined } from '@ant-design/icons';
import {Button, Card, List, message, Tag, Typography, Input} from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from 'umi';
import { queryToolList,addType,updateType,statusUpType } from './service';
import styles from './style.less';
import {FileApiDefinition, ITool, ToolStatus} from "@al-tool/domain";
import {useState} from "react";
import ToolAddOrUpModel from "@/pages/tool/components/toolAddOrUpModel";
import {TableListItem} from "@/pages/list/table-list/data";

const { Paragraph } = Typography;
const { Search } = Input;

/**
 * 添加工具标签
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
 * 修改工具标签
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
  /** 是否浏览数据 */
  const [done, setDone] = useState<boolean>(false);
  /** 修改卡片数据 */
  const [current, setCurrent] = useState<Partial<ITool> | undefined>(undefined);

  const { data, loading, run } = useRequest((search: string) => {
    return queryToolList({
      search: search,
    });
  });

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
  const nullData: Partial<ITool> = {};

  return (
    <PageContainer content={content} extraContent={extraContent}>
      <Search
        placeholder="模糊搜索工具标签"
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
        <List<Partial<ITool>>
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
                    actions={[<a key="option0" onClick={(e) => {
                      e.preventDefault();
                      setDone(true);
                      setCurrent(item);
                      handleModalVisible(true);
                    }}>浏览</a>,<a key="option1" onClick={(e) => {
                      e.preventDefault();
                      setDone(false);
                      setCurrent(item);
                      handleModalVisible(true);
                    }}>修改</a>, <a key="option2" onClick={async () => {
                      const success = item && item.id && item.status && await handleStatusUp(item.id,item.status);
                      if (success){
                        run(searchdata);
                      }
                    }}>{item.status === ToolStatus.enable ? '停用' : '启用'}</a>, <a key="option3">删除</a>]}
                    cover={
                      <img alt={item.code} src={FileApiDefinition.downloadICO.client()+'?id='+item.img}/>
                    }
                  >
                    <Card.Meta
                      title={<a>{item.title}</a>}
                      description={
                        <Paragraph className={styles.item} ellipsis={{ rows: 3 }}>
                          {item.name} | {item.name}
                          <br/>
                          {item.memo}
                          <br/>
                          <Tag color={item.status === ToolStatus.enable ? 'green' : 'red'}>{item.status === ToolStatus.enable ? '启用' : '停用'}</Tag>
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
                    setDone(false);
                    setCurrent(undefined);
                    handleModalVisible(true);
                  }}>
                  <PlusOutlined /> 新增工具标签
                </Button>
              </List.Item>
            );
          }}
        />
      </div>
      <ToolAddOrUpModel
        done={done}
        current={current}
        visible={createModalVisible}
        onDone={()=>{handleModalVisible(false)}}
        onSubmit={ async (values)=>{
          const success = values && values.id ? await handleUpdate(values as TableListItem) : await handleAdd(values as TableListItem);
          if (success) {
            handleModalVisible(false);
            run(searchdata);
          }
        }}/>
    </PageContainer>
  );
};

export default CardList;
