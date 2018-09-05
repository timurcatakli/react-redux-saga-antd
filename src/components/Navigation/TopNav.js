import React from 'react';
import { Layout, Badge, Icon } from 'antd';
import Messages from './Messages';
import './style.css';
import logo from './logo.png';

const { Header } = Layout;
const propTypes = {};

const TopNav = () => (
  <Header id="top-nav-header">
    <div className="top-nav-header-logo">
      <div>
        <img src={logo} className="top-nav-logo" alt="CARLSBAD" />
      </div>
      <div className="top-nav-project-title">CARLSBAD</div>
    </div>
    <div>
      <Messages />
    </div>
  </Header>
);

TopNav.propTypes = propTypes;
export default TopNav;
