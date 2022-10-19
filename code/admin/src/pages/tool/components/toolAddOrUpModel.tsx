import {FC, useRef} from "react";
import {
  ModalForm,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormDigit, ProFormGroup, ProFormDateTimePicker, ProFormInstance
} from "@ant-design/pro-form";
import {ITool} from "@al-tool/domain";
import {queryToolTypeRefer} from "@/pages/tool/service";
import ToolUpload from "@/pages/tool/components/toolUpload";
import {Tag} from "antd";


type ToolAddOrUpModelProps = {
  // 是否浏览态，如果是true则浏览数据，全部不可编辑
  done:boolean;
  // 显示隐藏弹窗
  visible:boolean;
  // 关闭弹窗
  onDone:() => void;
  // 提交
  onSubmit: (values: Record<string, any>) => void;
  // 页面初始化数据
  current: Partial<ITool> | undefined;

}

const ToolAddOrUpModel:FC<ToolAddOrUpModelProps> = (props) => {

  const {done,current,visible,onDone,onSubmit} = props;

  const formRef = useRef<ProFormInstance>();

  if (!visible) {
    return null;
  }

  return(
    <ModalForm
      title={done ? null : `${current ? "修改" : "新建"}工具标签`}
      width="50%"
      visible={visible}
      readonly={done}
      formRef={formRef}
      grid={true}
      layout='horizontal'
      submitter={{submitButtonProps:{style:{display:`${done ? 'none' : ''}`}}}}
      modalProps={{
        onCancel: () => onDone(),
        destroyOnClose: true,
      }}
      initialValues={current}
      onFinish={async (values) => {
        console.log(values)
        onSubmit(values);
      }}
    >
      <ProFormGroup
        title='基本字段'
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
          colProps={{ md: 12, xl: 8 }}
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
          colProps={{ md: 12, xl: 8 }}
          name="name"
        />
      </ProFormGroup>
      <ProFormGroup
        title='工具属性'
      >
        <ProFormSelect
          rules={[
            {
              required: true,
              message: '工具类别为必填项',
            },
          ]}
          request={async () => {
            return queryToolTypeRefer().then(({data}) => {
              return data.map((item) => {
                return{
                  label:`${item.code} | ${item.name}`,
                  value:item.id,
                }
              })
            })
          }}
          getValueFromEvent={e => {
            return e && e.key;
          }}
          fieldProps={{
            labelInValue: true
          }}
          label="工具类别"
          colProps={{ md: 12, xl: 8 }}
          name="toolType"
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: '标题为必填项',
            },
          ]}
          label="标题"
          colProps={{ md: 12, xl: 8 }}
          name="title"
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: 'URL为必填项',
            },
          ]}
          label="URL"
          colProps={{ md: 12, xl: 8 }}
          name="url"
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: '描述|备注为必填项',
            },
          ]}
          label="描述|备注"
          colProps={{ span: 24 }}
          name="memo"
        />
        <ToolUpload
          url={current && current.img}
          disabled={done}
          formRef={formRef}
        />
      </ProFormGroup>
      <ProFormGroup
        title='辅助字段'
      >
        <ProFormSelect
          label="启用状态"
          colProps={{ md: 12, xl: 6 }}
          name="status"
          valueEnum={{
            enable: <Tag color='green'>启用</Tag>,
            disable: <Tag color='red'>停用</Tag>
          }}
          disabled={true}
        />
        <ProFormSwitch
          label="设置常用"
          colProps={{ md: 12, xl: 6 }}
          name="frequently"
          disabled={true}
        />
        <ProFormDigit
          label="序列"
          colProps={{ md: 12, xl: 6 }}
          name="orderNum"
          fieldProps={{ precision: 0 }}
          disabled={true}
        />
        <ProFormDateTimePicker
          label="创建时间"
          colProps={{ md: 12, xl: 6 }}
          name="createdAt"
          disabled={true}
        />
        <ProFormDateTimePicker
          label="最后修改时间"
          colProps={{ md: 12, xl: 6 }}
          name="updatedAt"
          disabled={true}
        />
      </ProFormGroup>
    </ModalForm>
  );
}

export default ToolAddOrUpModel;
