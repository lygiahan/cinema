import React, { useState } from 'react'
import { Spin, Switch, Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function Loading() {
    const antIcon = <LoadingOutlined style={{ fontSize: 84 }} spin />;

    return (
        <div style={{textAlign:'center',marginTop:50}}>
            <Spin indicator={antIcon}>
         
             </Spin>
        
        </div>
    )
}
