import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { TopNav } from './components/Navigation';
// import LandingPage from './components/LandingPage';
// import SignUpPage from './components/SignUpPage';
// import SignInPage from './components/SignInPage';
// import PasswordForgetPage from './components/PasswordForgetPage';
// import HomePage from './components/HomePage';
// import AccountPage from './components/AccountPage';
// import { ROUTES } from './constants';
import { Button } from 'antd';
import './style.css';

const App = () => (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a auctor ipsum. Phasellus in
    risus elit. Cras porttitor vestibulum neque, et luctus orci egestas cursus. Sed tempor purus
    urna, at posuere orci ultricies ac. Aenean at vulputate est. Vestibulum vitae felis sodales,
    porta erat ut, tempus dui. Nunc venenatis velit in nunc laoreet dignissim. Vestibulum dapibus
    nisl venenatis tortor tincidunt, non egestas erat tincidunt. Proin diam sem, accumsan ut orci
    in, lacinia dapibus arcu. Proin varius dui neque, non scelerisque dolor consequat in. In in
    dictum ante. Proin rutrum dui quis eros porttitor, vel tincidunt est pharetra. Donec tincidunt
    lobortis ante a egestas. Mauris pretium volutpat mi. Sed venenatis mauris sit amet libero
    pharetra, non congue diam molestie. Vivamus auctoelit vitae magna consectetur pretium.
    <div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
    </div>
  </div>
  // <Router>
  //   <TopNav />
  //   <Route exact path={ROUTES.LANDING} component={LandingPage} />
  //   <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
  //   <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
  //   <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
  //   <Route exact path={ROUTES.HOME} component={HomePage} />
  //   <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
  // </Router>
);

export default App;
