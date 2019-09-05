import React from 'react';

const agentContext = React.createContext(null);

export const AgentProvider = agentContext.Provider;
export const AgentConsumer = agentContext.Consumer;

export function agentContentHOC(Compoent) {
  class AgentComponent extends React.Component {
    render() {
      const { forwardRef, ...props } = this.props;
      return <AgentConsumer>{context => <Compoent {...props} {...context} ref={forwardRef} />}</AgentConsumer>;
    }
  }

  return React.forwardRef((props, ref) => <AgentComponent {...props} forwardRef={ref} />);
}
