import React from 'react';
import AgentResource from './agentResource';
import AgentModal from './agentModal';
import './style/agentCard.less';

class AgentCard extends React.Component {
  render() {
    const { data, showAddModal, activeId, modalVisible, closeAddModal, addResource, deleteResource } = this.props;
    const idle = data.status === 0 ? true : false;
    const status = idle ? 'idle' : 'building';
    return (
      <div className={`agent-card ${status}`}>
        <div className="card--image" />
        <div className="card-content">
          <div className="card-message">
            <span className="card-title">{data.title}</span>
            <span className="card-info">
              <span className="devider">|</span>
              <span className="info-item">{status}</span>
              <span className="devider">|</span>
              <span className="info-item">{data.ip}</span>
              <span className="devider">|</span>
              <span className="info-item">{data.path}</span>
            </span>
          </div>
          <div className="card-resouce">
            <AgentResource
              data={data}
              deleteResource={deleteResource}
              showAddModal={showAddModal}
            />
          </div>
          {data.creator && <div className='info-reator'>
          {data.creator}
          </div>}
        </div>
            <AgentModal
              data={data}
              modalVisible={modalVisible}
              activeId={activeId}
              addResource={addResource}
              handleClose={closeAddModal}
            />
      </div>
    );
  }
}

export default AgentCard;
