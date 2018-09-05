import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import PasswordForgetPage from './components/PasswordForgetPage';
import HomePage from './components/HomePage';
import AccountPage from './components/AccountPage';
import { ROUTES } from './constants';
import { TopNav, LeftSideNav } from './components/Navigation';
import './components/Core/settings/global.css';

const { Content } = Layout;

const App = () => (
  <Router>
    <Layout className="app-layout">
      <LeftSideNav />
      <TopNav />
      <Content>
        <div className="app-content">
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        </div>
      </Content>
    </Layout>
  </Router>
);

export default App;
