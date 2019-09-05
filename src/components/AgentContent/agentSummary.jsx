import React from 'react';

function AgentSummary({ idleTotal = 0, buildingTotal = 0 }) {
  return (
    <div className="agent-summary-view">
      <div className="history-header">Summary</div>
      {buildingTotal !== 0 && (
        <div className="summary-info">
          <span className="info-label">building</span>
          <span className="info">{buildingTotal}</span>
        </div>
      )}
      {idleTotal !== 0 && (
        <div className="summary-info">
          <span className="info-label">idle</span>
          <span className="info">{idleTotal}</span>
        </div>
      )}
    </div>
  );
}

export default AgentSummary;
