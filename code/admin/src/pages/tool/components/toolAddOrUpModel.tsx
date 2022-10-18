import {FC} from "react";
import {ModalForm, ProFormSelect, ProFormText, ProFormUploadButton} from "@ant-design/pro-form";
import {ITool} from "@al-tool/domain";
import {TableListItem} from "@/pages/list/table-list/data";
import {queryToolTypeRefer} from "@/pages/tool/service";
import {message} from "antd";
import type { UploadChangeParam} from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';


type ToolAddOrUpModelProps = {
  done:boolean;
  visible:boolean;
  onDone:() => void;
  onSubmit: (values: TableListItem) => void;
  onUpdate: (values: TableListItem) => void;
  current: Partial<ITool> | undefined;

}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

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

  const {done,current,visible,onDone,onSubmit,onUpdate} = props;

  if (!visible) {
    return null;
  }

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj as RcFile, url => {
        info.file.response = url;
        info.file.thumbUrl = url;
      });
    }
  };

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
        console.log(values)
        values.img = values && values.img && values.img[0] && values.img[0].response;
        values.toolType = values && values.toolType && values.toolType.key;
        if (current && current.id){
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
        width="md"
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
        width="md"
        name="title"
      />
      <ProFormUploadButton
        rules={[
          {
            required: true,
            message: 'ICO为必填项',
          },
        ]}
        max={1}
        onChange={handleChange}
        fieldProps={{
          listType: "picture-card",
          beforeUpload,
        }}
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
    </ModalForm>
  );
}

export default ToolAddOrUpModel;
