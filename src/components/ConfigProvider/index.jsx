import React from 'react';
import { ConfigProvider, DatePicker } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import enUS from 'antd/lib/locale/en_US';

import moment from 'moment';
// import 'moment/locale/zh-cn';
// import 'moment/locale/es-us';

// moment.locale('');


export default function GlobalProvider() {
  return (
    <ConfigProvider locale={zhCN} >
      <DatePicker></DatePicker>
    </ConfigProvider>
  )
}
