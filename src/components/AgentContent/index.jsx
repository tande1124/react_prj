import React from 'react';
import AgentHeader from './agentHeader';
import AgentCard from './agentCard';
import AgentSummary from './agentSummary';
import AgentHistory from './agentHistory';
import agentService from '../../service/agentService';
import './style/index.less';

class AgentContent extends React.Component {
  state = {
    agentList: [], // agent列表
    idleTotal: 0, // 空闲
    buildingTotal: 0, // 使用中
    activeId: undefined, // 激活的弹框
    modalVisible: false,
    historyList: [] // 操作记录
  };

  componentDidMount() {
    this.queryAgentList();
  }

  /**
   * @desc 获取列表
   * @param type 列表类型
   */
  queryAgentList = async (type = 'all') => {
    const option = { type };
    let res = await agentService.queryAgentList(option);
    const idleTotal = res.filter(v => v.status === 1).length;
    const buildingTotal = res.length - idleTotal;
    this.setState({
      agentList: res,
      idleTotal,
      buildingTotal
    });
  };

  /**
   * @desc 过滤列表
   * @param parms 列表类型
   */
  changeContent = parms => {
    this.queryAgentList(parms);
  };

  /**
   * @desc 打开编辑弹窗
   * @param parms 选中项
   */
  showAddModal = parms => {
    this.setState({
      activeId: parms.id,
      modalVisible: true
    });
  };

  /**
   *@desc 关闭编辑弹窗
   */
  closeAddModal = () => {
    this.setState({
      activeId: undefined,
      modalVisible: false
    });
  };

  /**
   *@desc 添加resource类型
   */
  addResource = (parms, resourceLists = []) => {
    const { agentList, historyList } = this.state;
    const INDEX = agentList.findIndex(v => v.id === parms.id);
    agentList[INDEX].resources.push(...resourceLists);
    historyList.unshift(
      ...resourceLists.map(v => {
        return {
          type: 'increase',
          title: agentList[INDEX].title,
          resource: v
        };
      })
    );
    this.setState({
      agentList,
      historyList
    });
    return Promise.resolve();
  };

  /**
   *@desc 删除resource类型
   */
  deleteResource = (parms, index) => {
    const { agentList, historyList } = this.state;
    const INDEX = agentList.findIndex(v => v.id === parms.id);
    const deleteResource = agentList[INDEX].resources[index];
    agentList[INDEX].resources.splice(index, 1);
    historyList.unshift({
      type: 'delete',
      title: agentList[INDEX].title,
      resource: deleteResource
    });
    this.setState({
      agentList,
      historyList
    });
  };

  render() {
    const { agentList = [], idleTotal, buildingTotal, activeId, modalVisible, historyList } = this.state;
    return (
      <div className="agent-content-view">
        <AgentHeader changeContent={this.changeContent} />
        <div className="agent-section">
          <div className="list-view">
            {agentList.map(v => (
              <AgentCard
                data={v}
                key={v.id}
                showAddModal={this.showAddModal}
                activeId={activeId}
                modalVisible={modalVisible}
                closeAddModal={this.closeAddModal}
                addResource={this.addResource}
                deleteResource={this.deleteResource}
              />
            ))}
          </div>
          <div className="list-history">
            <AgentSummary idleTotal={idleTotal} buildingTotal={buildingTotal} />
            <AgentHistory data={historyList} />
          </div>
        </div>
      </div>
    );
  }
}

export default AgentContent;
