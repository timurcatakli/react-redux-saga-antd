import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
  Icon,
} from 'semantic-ui-react';
import { ROUTES } from '../../constants';

class LeftSideNav extends Component {
  state = {};

  handleItemClick = (name, url) => {
    this.setState({ activeItem: name });
    this.props.history.push(url);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="large" vertical fixed="left" style={{ marginTop: 61, paddingTop: 32 }}>
        <Menu.Item>
          <Input placeholder="Search..." />
        </Menu.Item>

        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={() => this.handleItemClick('home', '/')}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="landing"
          color="red"
          active={activeItem === 'landing'}
          onClick={() => this.handleItemClick('landing', '/')}
        >
          Landing
        </Menu.Item>

        <Menu.Item
          name="signup"
          active={activeItem === 'signup'}
          onClick={() => this.handleItemClick('signup', '/signup')}
        >
          Sign Up
        </Menu.Item>

        <Menu.Item
          name="signin"
          active={activeItem === 'signin'}
          onClick={() => this.handleItemClick('signin', '/signin')}
        >
          Sign In
        </Menu.Item>

        <Menu.Item
          name="account"
          active={activeItem === 'account'}
          onClick={() => this.handleItemClick('account', '/account')}
        >
          Account
        </Menu.Item>

        <Dropdown item text="More">
          <Dropdown.Menu>
            <Dropdown.Item icon="edit" text="Edit Profile" />
            <Dropdown.Item icon="globe" text="Choose Language" />
            <Dropdown.Item icon="settings" text="Account Settings" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    );
  }
}
export default withRouter(LeftSideNav);
