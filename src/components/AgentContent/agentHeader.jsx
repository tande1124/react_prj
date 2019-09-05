import React from 'react';
import './style/AgentHeader.less';

const TABS_LIST = [
  { label: 'All', value: 'all' },
  { label: 'Physical', value: 'physical' },
  { label: 'Virtual', value: 'virtual' },
];

class AgentHeader extends React.Component {
  state = {
    activeTab: 'all'
  }

  changeContent = (title) => {
    const { changeContent } = this.props;
    changeContent && changeContent(title);
    this.setState({
      activeTab: title
    });
  }

  render() {
    const { className='' } = this.props;
    const { activeTab } = this.state;
    return (
      <div className={`content-header ${className }`}>
        Agents
        <div className='botton-group'>
          {TABS_LIST.map(v => (
            <div key={v.value} className={`button ${activeTab === v.value ? 'active': ''}`} onClick={() => this.changeContent(v.value)}>
              {v.label}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default AgentHeader;