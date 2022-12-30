import {
    Breadcrumb,
    Button,
    Collapse,
    Divider,
    Image,
    ImagePreview,
    Slider,
    Space,
    Tag,
    Toast,
    Typography,
    Upload
} from "@douyinfe/semi-ui";
import {IconHome, IconPlus, IconPriceTag, IconUploadError} from "@douyinfe/semi-icons";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {chineseNewYear, christmas, hallowmas, nationalDay, staticType} from './static'

const { Title,Paragraph } = Typography;

export const FestivalHeadPictureMaking = () => {

    const navigate = useNavigate();
    const [image,setImage] = useState('');
    const [image2,setImage2] = useState('');
    const [base64,setBase64] = useState('');
    const [showSize,setShowSize] = useState(false)
    const [dx,setDx] = useState(10);
    const [dy,setDy] = useState(10);
    const [dw,setDw] = useState(20);
    const [dh,setDh] = useState(20);

    useEffect(()=>{
        let x = 500*dx/100;
        let y = 500*dy/100;
        let w = 500*dw/100;
        let h = 500*dh/100;
        console.log('位置:',x,y,w,h);
        image2 && drawAndShareImage(image2,x,y,w,h,true);
    },[dx,dy,dw,dh])

    //恢复位置默认值
    const setD = () => {
      setDx(10);
      setDy(10);
      setDw(20);
      setDh(20);
    }

    //贴图选择事件
    const onFrameSelect = (value:staticType)=>{
        setImage2(value.src);
        if (value.type === 'all'){
            //全框设置 默认位置0,0 默认大小500,500
            drawAndShareImage(value.src,0,0,500,500,false);
        }else if (value.type==='freedom'){
            //自由设置大小 初始位置50,50 默认大小100,100
            setD();
            drawAndShareImage(value.src,50,50,100,100,true);
        }
    }

    //添加画板 将头像与贴图合并并展示
    const drawAndShareImage = (src:string,dx:number,dy:number,dw:number,dh:number,flag:boolean) => {
        if (image){
            let canvas = document.createElement('canvas');
            canvas.width = 500;
            canvas.height = 500;
            let context = canvas.getContext('2d');
            if (context){
                context.rect(0, 0, canvas.width, canvas.height);
                let bgImg = document.createElement('img');
                bgImg.src=image;
                bgImg.crossOrigin='Anonymous';
                bgImg.onload = ()=>{
                    if (context){
                        context.drawImage(bgImg, 0, 0, 500, 500);
                        let img = document.createElement('img');
                        img.src=src;
                        img.crossOrigin='Anonymous';
                        img.onload=()=>{
                            if (context){
                                context.drawImage(img, dx, dy, dw, dh);
                                let base64 = canvas.toDataURL('image/png');
                                setBase64(base64);
                                setShowSize(flag);
                            }else{
                                Toast.error('创建画布失败，请刷新页面。');
                            }
                        }
                    }else{
                        Toast.error('创建画布失败，请刷新页面。');
                    }
                }
            }else{
                Toast.error('创建画布失败，请刷新页面。');
            }
        }else{
            Toast.error('请先上传头像在选择边框。');
        }
    }

    const showImages = (images:staticType[]) => {
        return (<ImagePreview visible={false} style={{width:1100,overflowX: 'scroll',whiteSpace: 'nowrap'}}>
            {images.map((image, index) => {
                return (
                    <a onClick={()=>{
                        onFrameSelect(image);
                    }}><Image key={index} src={image.src} width={100} alt={`lamp${index + 1}`} style={{ marginRight: 5 }}/></a>
                );
            })}
        </ImagePreview>)
    }

    const setImageSize = (src:string)=>{
        let canvas = document.createElement('canvas');
        canvas.width = 500;
        canvas.height = 500;
        let context = canvas.getContext('2d');
        if (context){
            let bgImg = document.createElement('img');
            bgImg.src=src;
            bgImg.crossOrigin='Anonymous';
            bgImg.onload=()=>{
                if (context){
                    context.drawImage(bgImg, 0, 0, 500, 500);
                    let base64 = canvas.toDataURL('image/png');
                    setImage(base64);
                }else{
                    Toast.error('创建画布失败，请刷新页面。');
                }
            }
        }else{
            Toast.error('创建画布失败，请刷新页面。');
        }
    }

    /**
     * desc: base64对象转blob文件对象
     * @param urlData  ：数据的base64对象
     * @param type  ：类型 png,pdf,doc,mp3等;
     * @returns {Blob}：Blob文件对象
     */
    const base64ToBlob = (urlData:string,type:string) => {
        let arr = urlData.split(',');
        let array = arr[0].match(/:(.*?);/);
        let mime = (array && array.length > 1 ? array[1] : type) || type;
        // 去掉url的头，并转化为byte
        let bytes = window.atob(arr[1]);
        // 处理异常,将ascii码小于0的转换为大于0
        let ab = new ArrayBuffer(bytes.length);
        // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
        let ia = new Uint8Array(ab);
        for (let i = 0; i < bytes.length; i++) {
            ia[i] = bytes.charCodeAt(i);
        }
        return new Blob([ab], {
            type: mime
        });
    }
    /**
     * desc: 下载导出文件
     * @param blob  ：返回数据的blob对象或链接
     * @param fileName  ：下载后文件名标记
     * @param fileType  ：文件类 word(docx) excel(xlsx) ppt等
     */
    const downloadExportFile = (blob:Blob, fileName:string, fileType:string) => {
        let downloadElement = document.createElement('a');
        downloadElement.href=window.URL.createObjectURL(blob);
        downloadElement.download = fileName + '.' + fileType; //下载后文件名
        downloadElement.click(); //触发点击下载
    }

    /**
     * desc: base64转文件并下载
     * @param base64 {String} : base64数据
     * @param fileName {String} : 文件名
     */
    const downloadFile = (base64:string, fileName:string) => {
        let blob = base64ToBlob(base64,'image/jpg')  // 转成blob对象
        downloadExportFile(blob, fileName,'jpg') // 下载文件
    }


    return (<div style={{margin: '20px 10px'}}>
        <Breadcrumb compact={false}>
            <Breadcrumb.Item href='/home' icon={<IconHome size="small"/>}></Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => navigate('/home', {state: {type: '图像类'}})}
                             icon={<IconPriceTag size="small"/>}>图像类</Breadcrumb.Item>
            <Breadcrumb.Item>节日头像制作</Breadcrumb.Item>
        </Breadcrumb>
        <Title heading={2} style={{margin: '8px 0'}}>节日头像制作</Title>
        <Space>
            <Space vertical>
                <Upload
                    accept=".png,.jpg,.jpeg,.bmp"
                    limit={1}
                    listType="picture"
                    multiple
                    onChange={({currentFile,fileList})=>{
                        setBase64('');
                        if (fileList.length == 0){
                            setImage('')
                        } else if (currentFile && currentFile.url){
                            setImageSize(currentFile.url);
                        }
                    }}
                    customRequest={({ file, onProgress, onError, onSuccess})=>{
                        if (file && file.url){
                            // @ts-ignore
                            onSuccess();
                            return;
                        }else {
                            // @ts-ignore
                            onError();
                            return;
                        }
                    }}
                ><IconPlus size="extra-large" /></Upload>
                <Button onClick={()=>{
                    if (base64){
                        downloadFile(base64,'头像');
                    }else {
                        Toast.error('请先上传头像并选择贴图后在下载。');
                    }
                }}>下载到本地</Button>
            </Space>
            <Image
                src={base64 || image}
                style={{marginLeft:50,width:500,height:500}}
                fallback={<IconUploadError style={{ fontSize: 50 }}/>}
                preview={false}/>
            {showSize && <div style={{marginLeft:50,width:500}}>
                <div>横向位置</div>
                <Slider showBoundary={true}
                        tipFormatter={v => (`${v}%`)}
                        getAriaValueText={v => (`${v}%`)}
                        defaultValue={10}
                        onChange={(value)=> typeof value === 'number' && setDx(value)}/>
                <br/><br/>
                <div>纵向位置</div>
                <Slider showBoundary={true}
                        tipFormatter={v => (`${v}%`)}
                        getAriaValueText={v => (`${v}%`)}
                        defaultValue={10}
                        onChange={(value)=> typeof value === 'number' && setDy(value)}/>
                <br/><br/>
                <div>宽度</div>
                <Slider showBoundary={true}
                        tipFormatter={v => (`${v}%`)}
                        getAriaValueText={v => (`${v}%`)}
                        defaultValue={20}
                        onChange={(value)=> typeof value === 'number' && setDw(value)}/>
                <br/><br/>
                <div>高度</div>
                <Slider showBoundary={true}
                        tipFormatter={v => (`${v}%`)}
                        getAriaValueText={v => (`${v}%`)}
                        defaultValue={20}
                        onChange={(value)=> typeof value === 'number' && setDh(value)}/>
            </div>}
        </Space>
        <Divider margin={12}/>
        <Collapse accordion defaultActiveKey={"1"} style={{width:1100}}>
            <Collapse.Panel header="国庆节" itemKey="1">
                {showImages(nationalDay)}
            </Collapse.Panel>
            <Collapse.Panel header="圣诞节" itemKey="2">
                {showImages(christmas)}
            </Collapse.Panel>
            <Collapse.Panel header="万圣节" itemKey="3">
                {showImages(hallowmas)}
            </Collapse.Panel>
            <Collapse.Panel header="春节" itemKey="4">
                {showImages(chineseNewYear)}
            </Collapse.Panel>
        </Collapse>
        <Divider margin={12}/>
        <Title heading={4} style={{ margin: '8px 0' }} >简介</Title>
        <Paragraph>
            一键在线生成节日头像，包括：国庆节头像、圣诞节、春节头像等。
        </Paragraph>
        <Title heading={4} style={{ margin: '8px 0' }} >使用说明</Title>
        <Space vertical align={'start'} style={{width:1100}}>
            <Paragraph spacing={'extended'}>
                1、上传图片；
            </Paragraph>
            <Paragraph spacing={'extended'}>
                2、选择边框，左右滑动可以查看更多边框。
            </Paragraph>
            <Paragraph spacing={'extended'}>
                3、调整贴图大小及位置。
            </Paragraph>
            <Paragraph spacing={'extended'}>
                4、点击下载到本地。
            </Paragraph>
        </Space>
    </div>)
}