import React, { Component } from 'react';
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
import { LeftSideNav } from './';
import { ROUTES } from '../../constants';

const trigger = (
  <span>
    <Image avatar src="http://react.semantic-ui.com/images/avatar/large/jenny.jpg" />
  </span>
);

const triggerAlerts = (
  <span>
    <Icon name="alarm" /> Alerts
    <Label color="red" style={{ marginLeft: 6 }}>
      4
    </Label>
  </span>
);

const options = [
  { key: 'user', text: 'Account', icon: 'user' },
  { key: 'settings', text: 'Settings', icon: 'settings' },
  { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
];

const optionsAlerts = [
  {
    key: 'today',
    description: '10 mins ago',
    value: 'today',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
  },
  {
    key: 'this week',
    text: 'this week',
    value: 'this week',
    content: 'This Week',
  },
  {
    key: 'this month',
    text: 'this month',
    value: 'this month',
    content: 'This Month',
  },
];

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu fixed="top" inverted>
          <Menu.Item header>
            <Image
              size="mini"
              src="https://www.logolynx.com/images/logolynx/f2/f222760c66cf7aab3a64eeb0157646b6.png"
              style={{ marginRight: '1.5em' }}
            />
            CARLSBAD
          </Menu.Item>
          <Menu.Item as="a" position="right">
            <Icon name="mail" /> Messages
            <Label color="green">8</Label>
          </Menu.Item>
          <Menu.Item as="a">
            <Dropdown
              trigger={triggerAlerts}
              pointing="top right"
              icon={null}
              options={optionsAlerts}
            />
          </Menu.Item>
          <Menu.Item>
            <Dropdown trigger={trigger} pointing="top right" icon={null}>
              <Dropdown.Menu>
                <Dropdown.Item text="Settings" />
                <Dropdown.Item text="Feedback" />
                <Dropdown.Item text="Help" />
                <Dropdown.Divider />
                <Dropdown.Item icon="log out" text="Log Out" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>
        <LeftSideNav />
      </div>
    );
  }
}
export default TopNav;
