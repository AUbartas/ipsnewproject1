import { Alert, Spin } from 'antd';
import React from 'react';

const Spinner = ({ msg = 'Loading...' }) => (
  <div style={{ textAlign: 'center', marginTop: 10 }}>
    <Spin tip={msg}></Spin>
  </div>
);

export default Spinner;
