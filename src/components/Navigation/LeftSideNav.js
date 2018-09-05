import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const propTypes = {};

class LeftSideNav extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  handleItemClick = url => {
    this.props.history.push(url);
  };

  render() {
    const { pathname } = this.props.location;
    const bbb = this.state.collapsed ? '100px' : '220px';
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        breakpoint="lg"
        collapsedWidth="80"
        className="left-side-nav-sider"
      >
        <Menu theme="dark" defaultSelectedKeys={[pathname]} mode="inline">
          <Menu.Item key="/" onClick={() => this.handleItemClick('/')}>
            <Icon type="home" />
            <span>Home</span>
          </Menu.Item>
          <Menu.Item key="/signin" onClick={() => this.handleItemClick('/signin')}>
            <Icon type="build" />
            <span>Sources</span>
          </Menu.Item>
          <Menu.Item key="/account" onClick={() => this.handleItemClick('/account')}>
            <Icon type="thunderbolt" />
            <span>Indicators</span>
          </Menu.Item>
          <Menu.Item key="/pw-forget" onClick={() => this.handleItemClick('/pw-forget')}>
            <Icon type="profile" />
            <span>Cases</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="layout" />
            <span>Playbooks</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="database" />
            <span>Apps</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

LeftSideNav.propTypes = propTypes;
export default withRouter(LeftSideNav);
