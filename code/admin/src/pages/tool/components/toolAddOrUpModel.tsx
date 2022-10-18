import {FC} from "react";
import {ModalForm, ProFormSelect, ProFormText} from "@ant-design/pro-form";
import {ITool} from "@al-tool/domain";
import {TableListItem} from "@/pages/list/table-list/data";

type ToolAddOrUpModelProps = {
  done:boolean;
  visible:boolean;
  onDone:() => void;
  onSubmit: (values: TableListItem) => void;
  onUpdate: (values: TableListItem) => void;
  current: Partial<ITool> | undefined;

}
const ToolAddOrUpModel:FC<ToolAddOrUpModelProps> = (props) => {

  const {done,current,visible,onDone,onSubmit,onUpdate} = props;

  if (!visible) {
    return null;
  }

  return(
    <ModalForm
      title={done ? null : `${current ? "新建" : "修改"}工具标签`}
      width="400px"
      visible={visible}
      modalProps={{
        onCancel: () => onDone(),
        destroyOnClose: true,
        bodyStyle: done ? { padding: '72px 0' } : {},
      }}
      initialValues={current}
      onFinish={async (values) => {
        if (current){
          onUpdate(values as TableListItem);
        }else{
          onSubmit(values as TableListItem);
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
      <ProFormText
        rules={[
          {
            required: true,
            message: '标题为必填项',
          },
        ]}
        label="标题"
        width="md"
        name="title"
      />
      <ProFormText
        rules={[
          {
            required: true,
            message: 'ICO为必填项',
          },
        ]}
        label="ICO"
        width="md"
        name="img"
      />
      <ProFormText
        rules={[
          {
            required: true,
            message: 'URL为必填项',
          },
        ]}
        label="URL"
        width="md"
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
        width="md"
        name="memo"
      />
      <ProFormSelect
        rules={[
          {
            required: true,
            message: '工具类别为必填项',
          },
        ]}
        label="工具类别"
        width="md"
        name="toolType"
      />
    </ModalForm>
  );
}

export default ToolAddOrUpModel;
