import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton, Popover, Badge, Icon } from 'antd';

const propTypes = {};
const demoNotifications = [
  {
    id: 1,
    name: 'David Doe',
    notification:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 2,
    name: 'Navis Doe',
    notification:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 3,
    name: 'Emanual Doe',
    notification:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 4,
    name: 'Dowain Doe',
    notification:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
];

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

class Messages extends Component {
  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    const content = (
      <div>
        <h3
          style={{
            fontWeight: '100',
            textAlign: 'center',
            borderBottom: '1px solid #e8e8e8',
            paddingBottom: '10px',
          }}
        >
          MESSAGES
        </h3>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={
                  <div>
                    <a href="https://ant.design">{item.title}</a>
                    <br />12/12/12
                  </div>
                }
                description="Ant Design, a design language for background applications..."
              />
            </List.Item>
          )}
        />
        <Button>loading more</Button>
      </div>
    );

    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        placement="bottomLeft"
        style={{ width: '100px' }}
      >
        <Badge count={5}>
          <Icon type="message" style={{ fontSize: '26px' }} theme="outlined" />
        </Badge>
      </Popover>
    );
  }
}

Messages.propTypes = propTypes;
export default Messages;
