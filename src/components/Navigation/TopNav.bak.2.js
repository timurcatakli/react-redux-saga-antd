import React from 'react';
import { Layout } from 'antd';
import './style.css';
import logo from './logo.png';

const { Header } = Layout;
const propTypes = {};

const TopNav = () => (
  <Header id="top-nav-header">
    <div>
      <img src={logo} className="top-nav-logo" alt="CARLSBAD" />
    </div>
    <div>
      <span className="top-nav-project-title">CARLSBAD</span>
    </div>
  </Header>
);

TopNav.propTypes = propTypes;
export default TopNav;
