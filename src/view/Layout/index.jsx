import React from 'react';
import { withRouter } from 'react-router-dom';
import AgentContainer from '../../components/AgentContainer';
import './index.less';

@withRouter
class Layout extends React.Component {
  handleSignOut = () => {
    const { history } = this.props;
    window.localStorage.removeItem('login');
    window.localStorage.removeItem('user');
    history.push({
      pathname: '/login'
    });
  };

  render() {
    const USER = window.localStorage.getItem('user') || '';
    return (
      <div className="layout-view">
        <div className="layout-header">
          <div className="header-title">Cruise</div>
          <div className="header-sign">
            hellow {USER}
            <span className="sign-out" onClick={this.handleSignOut}>
              Sign out
            </span>
          </div>
        </div>
        <div className="layout-content">
          <AgentContainer />
        </div>
        <div className="layout-footer">Copyright:Thoughtworks Inc.</div>
      </div>
    );
  }
}

export default Layout;
