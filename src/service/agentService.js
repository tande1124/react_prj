class agentService {
  queryAgentList(data) {
    return fetch('mock/agentList.json')
      .then(res => res.json())
      .then(res => {
        const result = res.filter(v => v.type === data.type || data.type === 'all');
        return result;
      });
  }
}

export default new agentService();
