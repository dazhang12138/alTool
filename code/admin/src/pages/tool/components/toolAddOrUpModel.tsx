import {FC} from "react";
import {
  ModalForm,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormUploadButton,
  ProFormDigit, ProFormGroup, ProFormDateTimePicker
} from "@ant-design/pro-form";
import {FileApiDefinition, ITool} from "@al-tool/domain";
import {queryToolTypeRefer} from "@/pages/tool/service";
import {message} from "antd";
import type { RcFile } from 'antd/es/upload/interface';


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
const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('请上传 JPG/PNG 类型文件!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片大小最大为 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const ToolAddOrUpModel:FC<ToolAddOrUpModelProps> = (props) => {

  const {done,current,visible,onDone,onSubmit} = props;

  if (!visible) {
    return null;
  }
  if (current){
    current.img = undefined;
    // current.toolType = undefined;
  }

  return(
    <ModalForm
      title={done ? null : `${current ? "修改" : "新建"}工具标签`}
      width="50%"
      visible={visible}
      readonly={done}
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
        values.img = values && values.img && values.img[0] && values.img[0].response;
        values.toolType = values && values.toolType && values.toolType.key;
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
        <ProFormUploadButton
          rules={[
            {
              required: true,
              message: 'ICO为必填项',
            },
          ]}
          max={1}
          action={FileApiDefinition.uploadICO.client()}
          fieldProps={{
            listType: "picture-card",
            beforeUpload,
          }}
          label="ICO"
          colProps={{ md: 12, xl: 24 }}
          name="img"
        />
      </ProFormGroup>
      <ProFormGroup
        title='辅助字段'
      >
        <ProFormSwitch
          label="启用状态"
          colProps={{ md: 12, xl: 6 }}
          name="status"
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
