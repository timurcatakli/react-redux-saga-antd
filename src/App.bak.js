import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import PasswordForgetPage from './components/PasswordForgetPage';
import HomePage from './components/HomePage';
import AccountPage from './components/AccountPage';
import { ROUTES } from './constants';

const App = () => (
  <div>
    <Router>
      <div>
        <Navigation />
        <Container text style={{ marginTop: '7em' }}>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        </Container>
      </div>
    </Router>
  </div>
);

export default App;
