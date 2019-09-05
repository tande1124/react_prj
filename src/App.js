import React from 'react';
import { ConfigProvider } from 'antd';
import Routes from './routes';
import zhCN from 'antd/es/locale/zh_CN';
import './App.less';

class App extends React.Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Routes />
      </ConfigProvider>
    );
  }
}

export default App;