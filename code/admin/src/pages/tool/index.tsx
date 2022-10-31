import {EditOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Card, List, message, Input, Tag, Dropdown, Menu, MenuProps, Avatar, Space} from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from 'umi';
import { queryToolList,addType,updateType,statusUpType } from './service';
import styles from './style.less';
import {ITool, ToolStatus} from "@al-tool/domain";
import {useState} from "react";
import ToolAddOrUpModel from "@/pages/tool/components/toolAddOrUpModel";
import {TableListItem} from "@/pages/list/table-list/data";

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
    //处理img
    if (fields['img'].length !== 36){
      fields['img'] = fields['img'].substring(fields['img'].length -36);
    }
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

const onMenuClick: MenuProps['onClick'] = e => {
  console.log('click', e);
};

const menu=(
  <Menu
    onClick={onMenuClick}
    items={[
      {
        key:'top',
        label:'TOP'
      },{
        key:'up',
        label:'UP'
      },{
        key:'down',
        label:'DOWN'
      },{
        key:'bottom',
        label:'BOTTOM'
      }
    ]}
  />
)


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
                    actions={[<a key="option1" onClick={(e) => {
                      e.preventDefault();
                      setDone(false);
                      setCurrent(item);
                      handleModalVisible(true);
                    }}><EditOutlined/></a>, <a key="option2" onClick={async () => {
                      const success = item && item.id && item.status && await handleStatusUp(item.id,item.status);
                      if (success){
                        run(searchdata);
                      }
                    }}>{item.status === ToolStatus.enable ? '停用' : '启用'}</a>,<Dropdown.Button type='text' overlay={menu}>序列操作</Dropdown.Button>]}
                  >
                    <Card.Meta
                      avatar={<Avatar src={item.img}></Avatar>}
                      title={<Space>
                        <a onClick={(e) => {
                            e.preventDefault();
                            setDone(true);
                            setCurrent(item);
                            handleModalVisible(true);
                          }}
                        >
                          {item.title}
                        </a>
                        <Tag color={item.status === ToolStatus.enable ? "green" : "red"}>
                          {item.status === ToolStatus.enable ? '启用' : '停用'}
                        </Tag>
                      </Space>}
                      description={item.memo}
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
