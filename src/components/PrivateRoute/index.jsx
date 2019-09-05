import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './index.less';

@withRouter
class PrivateRoute extends React.Component {
  state = {
    isLogin: window.localStorage.getItem('login') === 'true'
  };

  componentWillMount() {
    const { isLogin } = this.state;
    const { history } = this.props;
    if (!isLogin) {
      history.push({
        pathname: '/login'
      });
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;
    const { isLogin } = this.state;
    return isLogin ? <Route {...rest} render={props => <Component {...props} />} /> : <p className="login">请登录...</p>;
  }
}

export default PrivateRoute;
