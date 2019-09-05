import React from 'react';
import AgentContent from '../AgentContent';
import './index.less';

const TAB_LIST = [
  { value: 'dashboard', label: 'DASHBOARD' },
  { value: 'mycruise', label: 'MY CRUSE' },
  { value: 'agent', label: 'AGENTS' },
  { value: 'help', label: 'HElP' }
];

class AgentContainer extends React.Component {
  state = {
    activeTab: 'agent',
    content: null
  };

  componentDidMount() {
    const { activeTab } = this.state;
    this.handleLabel(activeTab);
  }

  handleLabel = activeTab => {
    let content = null;
    switch (activeTab) {
      case 'dashboard':
        content = <div> DASHBOARD </div>;
        break;
      case 'mycruise':
        content = <div> CRUISE </div>;
        break;
      case 'agent':
        content = <AgentContent />;
        break;
      case 'help':
        content = <div> HELP </div>;
        break;
      default:
        break;
    }
    this.setState({
      activeTab,
      content
    });
  };

  render() {
    const { activeTab, content } = this.state;
    return (
      <div className="agent-container-view">
        <ul className="agent-label">
          {TAB_LIST.map(v => (
            <li key={v.value} onClick={this.handleLabel.bind(this, v.value)} className={activeTab === v.value ? 'label-active' : ''}>
              {v.label}
            </li>
          ))}
        </ul>
        <div className="container-body">{content}</div>
      </div>
    );
  }
}

export default AgentContainer;
