import {FileApiDefinition} from "@al-tool/domain";
import {RcFile} from "antd/es/upload/interface";
import {message, Upload, UploadFile, UploadProps} from "antd";
import type { UploadChangeParam } from 'antd/es/upload';
import {FC, MutableRefObject, useState} from "react";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import {ProFormInstance, ProFormText} from "@ant-design/pro-form";

type ToolUploadProps = {
  url: string | undefined;
  disabled: boolean;
  formRef: MutableRefObject<ProFormInstance | undefined>;
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

const ToolUpload:FC<ToolUploadProps> = (props) => {

  const {url, disabled, formRef} = props;

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | undefined>(url);

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setLoading(false);
      setImageUrl(FileApiDefinition.downloadICO.client()+'?id=' + info.file.response);
      formRef && formRef.current && formRef.current.setFieldValue('img',info.file.response);
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传 ICO </div>
    </div>
  );
  return(
    <ProFormText
      rules={[
        {
          required: true,
          message: 'ICO为必填项',
        },
      ]}
      colProps={{ md: 12, xl: 8 }}
      label='ICO'
      name='img'
    >
      <Upload
        disabled={disabled}
        maxCount={1}
        action={FileApiDefinition.uploadICO.client()}
        onChange={handleChange}
        name='file'
        listType= "picture-card"
        beforeUpload={beforeUpload}
        showUploadList={false}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    </ProFormText>

  );
}

export default ToolUpload;
