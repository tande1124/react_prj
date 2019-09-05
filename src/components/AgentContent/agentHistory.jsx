import React from 'react';

function AgentHistory({ data = [] }) {
  // const
  return (
    <div className="agent-history-view">
      <div className="history-header">History</div>
      <div className="history-content">
        {data.map((v, index) => (
          <div className="info" key={v.title + index}>
            <span className="info-title" title={v.title}>
              {v.title && v.title.match(/[0-9a-z]{13}/)}
            </span>
            <span className="info-title" title={v.type}>
              {v.type}
            </span>
            <span className="info-title" title={v.resource}>
              {v.resource}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentHistory;
