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
  Input,
  Label,
} from 'semantic-ui-react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import PasswordForgetPage from './components/PasswordForgetPage';
import HomePage from './components/HomePage';
import AccountPage from './components/AccountPage';
import { ROUTES } from './constants';
import './style.css';

const App = () => (
  <Router>
    <Grid style={{ marginTop: 19 }}>
      <Grid.Row columns={16}>
        <Grid.Column>
          <Navigation />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={16}>
        <Grid.Column style={{ backgroundColor: 'gold' }} width={4}>
          <Menu
            size="large"
            vertical
            fluid
            style={{
              backgroundColor: 'gold',
              height: '100vh',
              border: 'none',
            }}
          >
            <Menu.Item name="inbox">
              <Label color="teal">1</Label>
              Inbox
            </Menu.Item>

            <Menu.Item name="spam">
              <Label>51</Label>
              Spam
            </Menu.Item>

            <Menu.Item name="updates">
              <Label>1</Label>
              Updates
            </Menu.Item>
            <Menu.Item>
              <Input icon="search" placeholder="Search mail..." />
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column width={12} style={{ backgroundColor: 'pink' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a auctor ipsum. Phasellus
          in risus elit. Cras porttitor vestibulum neque, et luctus orci egestas cursus. Sed tempor
          purus urna, at posuere orci ultricies ac. Aenean at vulputate est. Vestibulum vitae felis
          sodales, porta erat ut, tempus dui. Nunc venenatis velit in nunc laoreet dignissim.
          Vestibulum dapibus nisl venenatis tortor tincidunt, non egestas erat tincidunt. Proin diam
          sem, accumsan ut orci in, lacinia dapibus arcu. Proin varius dui neque, non scelerisque
          dolor consequat in. In in dictum ante. Proin rutrum dui quis eros porttitor, vel tincidunt
          est pharetra. Donec tincidunt lobortis ante a egestas. Mauris pretium volutpat mi. Sed
          venenatis mauris sit amet libero pharetra, non congue diam molestie. Vivamus auctor velit
          vitae magna consectetur pretium.
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Router>
);

export default App;
