import React from 'react';
import { Button, Input, message } from 'antd';

class AgentModal extends React.Component {
  state = {
    value: undefined
  };

  /**
   * @desc 新增resource
   */
  addResource = () => {
    const { value } = this.state;
    const { data, addResource } = this.props;
    let inputValue = value ? value.trim() : '';
    if (!inputValue) {
      return message.info('请输入Resource!');
    }
    inputValue = inputValue.split(',');
    addResource &&
      addResource(data, inputValue).then(() => {
        this.handleClose();
      });
  };

  /**
   * @desc 输入框事件
   */
  inputChange = e => {
    const value = e.target.value;
    this.setState({
      value
    });
  };

  /**
   * @desc 关闭弹窗 清空input
   */
  handleClose = () => {
    const { handleClose } = this.props;
    this.setState({
      value: ''
    });
    handleClose && handleClose();
  };

  render() {
    const { value } = this.state;
    const { data, modalVisible, activeId } = this.props;
    return (
      <div className={`add-modal ${activeId === data.id && modalVisible ? 'add-active' : ''}`}>
        <div className="modal-icon" />
        <p>(separate multiple resources name with commas)</p>
        <Input onChange={this.inputChange} value={value} />
        <div className="add-submit">
          <Button onClick={this.addResource}> Add resources </Button>
          <Button onClick={this.handleClose}>Close</Button>
        </div>
      </div>
    );
  }
}
export default AgentModal;
