import React from 'react';
import { Empty } from '@douyinfe/semi-ui';
import { IllustrationFailure, IllustrationFailureDark } from '@douyinfe/semi-illustrations';
import {useRouteError} from "react-router-dom";

const ErrorBoundary = () => {

    const err = useRouteError() as any;

    return (
        <Empty
            image={<IllustrationFailure style={{ width: 150, height: 150 }} />}
            darkModeImage={<IllustrationFailureDark style={{ width: 150, height: 150 }} />}
            title={'加载失败'}
            description={"错误信息:" + err.message}
        />
    );
};

export default ErrorBoundary;