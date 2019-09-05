import React from 'react';
import { Form, Button, Input, message } from 'antd';
import { withRouter } from 'react-router-dom';
import loginService from '../../service/loginService';
import './index.less';

@withRouter
class Login extends React.Component {
  componentWillMount() {
    const { history } = this.props;
    const loginType = window.localStorage.getItem('login') === 'true';
    if (loginType) {
      history.push({
        pathname: '/'
      });
    }
  }
  handleSubmit = e => {
    const { history } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      loginService.queryLogin(values).then(
        () => {
          window.localStorage.setItem('login', true);
          window.localStorage.setItem('user', values.userName);
          history.push({
            pathname: '/'
          });
        },
        () => {
          message.warning('wrong username and password,please input again');
        }
      );
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-view">
        <div className="login-header">chenan</div>
        <div className="login-content">
          <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} onSubmit={this.handleSubmit}>
            <Form.Item label="Username">
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your userName!' }]
              })(<Input placeholder="entry your Username" />)}
            </Form.Item>
            <Form.Item label="Password">
              {getFieldDecorator('passWord', {
                rules: [{ required: true, message: 'Please input your password!' }]
              })(<Input placeholder="entry your Password" />)}
            </Form.Item>
            <Button htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create({})(Login);
