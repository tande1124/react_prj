import React from 'react';
import { withRouter } from 'react-router-dom';

@withRouter
class Home extends React.Component {
  render() {
    return <div className="home-view">home-view</div>;
  }
}

export default Home;
