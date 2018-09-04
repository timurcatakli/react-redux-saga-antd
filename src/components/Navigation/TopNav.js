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

const options = [
  { key: 'user', text: 'Account', icon: 'user' },
  { key: 'settings', text: 'Settings', icon: 'settings' },
  { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
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
              src="http://react.semantic-ui.com/logo.png"
              style={{ marginRight: '1.5em' }}
            />
            CARLSBAD
          </Menu.Item>
          <Menu.Item as="a" position="right">
            <Icon name="mail" /> Messages
            <Label color="red">8</Label>
          </Menu.Item>
          <Menu.Item>
            <Icon name="users" /> Alerts
            <Label color="teal">4</Label>
          </Menu.Item>
          <Menu.Item>
            <Dropdown trigger={trigger} pointing="top right" icon={null}>
              <Dropdown.Menu>
                <Dropdown.Item>
                  New
                  <Label circular color="red">
                    2
                  </Label>
                </Dropdown.Item>
                <Dropdown.Item text="Open..." description="ctrl + o" />
                <Dropdown.Item text="Save as..." description="ctrl + s" />
                <Dropdown.Item text="Rename" description="ctrl + r" />
                <Dropdown.Item text="Make a copy" />
                <Dropdown.Item icon="folder" text="Move to folder" />
                <Dropdown.Item icon="trash" text="Move to trash" />
                <Dropdown.Divider />
                <Dropdown.Item text="Download As..." />
                <Dropdown.Item text="Publish To Web" />
                <Dropdown.Item text="E-mail Collaborators" />
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
