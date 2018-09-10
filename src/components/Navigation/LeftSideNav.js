import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const propTypes = {};

class LeftSideNav extends React.Component {
  onCollapse = () => {
    this.props.toggleSidebar();
  };

  handleItemClick = url => {
    this.props.history.push(url);
  };

  render() {
    const { pathname } = this.props.location;
    const { sidebarCollapsed } = this.props.app;
    return (
      <Sider
        collapsible
        collapsed={sidebarCollapsed}
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
