import React from 'react';

class AgentResource extends React.Component {
  render() {
    const { data = {}, showAddModal, deleteResource } = this.props;
    return (
      <div className="list-add-delete">
        <div className="add-btn" onClick={() => showAddModal(data)}>
          + <span> Specify Resouce </span>
        </div>
        <span className="devider">|</span>
        <div className="resource-list-container">
          <div>Resource:</div>
          <ul className="resource-list">
            {data.resources.map((x, index) => {
              return (
                <li className="resource-item" key={x + index}>
                  <span> {x} </span>
                  <span className="delete-item" onClick={() => deleteResource(data, index)}>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default AgentResource;
