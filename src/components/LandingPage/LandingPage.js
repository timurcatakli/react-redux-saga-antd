import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import StickerWidget from '../Core/StickerWidget';
import BoxNumberWidget from '../Core/BoxNumberWidget';
import { rowStyle, colStyle } from '../Core/settings/style-util';

const LandingPage = () => (
  <Fragment>
    <Row style={rowStyle} gutter={16} justify="start">
      <Col xs={24} style={colStyle}>
        <h3 className="box-header">PERFORMANCE</h3>
      </Col>
    </Row>
    <Row style={rowStyle} gutter={16} justify="start">
      <Col xl={6} lg={12} md={12} sm={24} xs={24} style={colStyle}>
        <BoxNumberWidget
          label="Mean Time To Resolution"
          price="12m"
          details="What this number means is briefly explained here..."
          fontColor="#7ED320"
        />
      </Col>
      <Col xl={6} lg={12} md={12} sm={24} xs={24} style={colStyle}>
        <BoxNumberWidget
          label="Max Time To Resolution"
          price="19m"
          details="What this number means is briefly explained here..."
          fontColor="#7ED320"
        />
      </Col>
      <Col xl={6} lg={12} md={12} sm={24} xs={24} style={colStyle}>
        <BoxNumberWidget
          label="Mean Time To Triage"
          price="21m"
          details="What this number means is briefly explained here..."
          fontColor="#7ED320"
        />
      </Col>
      <Col xl={6} lg={12} md={12} sm={24} xs={24} style={colStyle}>
        <BoxNumberWidget
          label="Mean Dwell Time"
          price="34m"
          details="What this number means is briefly explained here..."
          fontColor="#7ED320"
        />
      </Col>
    </Row>
    <Row style={rowStyle} gutter={16} justify="start">
      <Col xs={24} style={colStyle}>
        <h3 className="box-header">AUTOMATION ROI SUMMARY</h3>
      </Col>
    </Row>

    <Row style={rowStyle} gutter={16} justify="start">
      <Col xl={6} lg={12} md={12} sm={24} xs={24} style={colStyle}>
        <StickerWidget
          number="73"
          text="Resolved Events"
          icon="hdd"
          fontColor="#ffffff"
          bgColor="#F75D81"
        />
      </Col>
      <Col xl={6} lg={12} md={12} sm={24} xs={24} style={colStyle}>
        <StickerWidget
          number="3 mins"
          text="Mean Time"
          icon="hourglass"
          fontColor="#ffffff"
          bgColor="#7ED320"
        />
      </Col>
      <Col xl={6} lg={12} md={12} sm={24} xs={24} style={colStyle}>
        <StickerWidget
          number="$1.2K"
          text="Dollars Saved"
          icon="dollar"
          fontColor="#ffffff"
          bgColor="#42A5F6"
        />
      </Col>
      <Col xl={6} lg={12} md={12} sm={24} xs={24} style={colStyle}>
        <StickerWidget
          number="8 days"
          text="Time Saved"
          icon="dashboard"
          fontColor="#ffffff"
          bgColor="#7266BA"
        />
      </Col>
    </Row>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a auctor ipsum. Phasellus in
      risus elit. Cras porttitor vestibulum neque, et luctus orci egestas cursus. Sed tempor purus
      urna, at posuere orci ultricies ac. Aenean at vulputate est. Vestibulum vitae felis sodales,
      porta erat ut, tempus dui. Nunc venenatis velit in nunc laoreet dignissim. Vestibulum dapibus
      nisl venenatis tortor tincidunt, non egestas erat tincidunt. Proin diam sem, accumsan ut orci
      in, lacinia dapibus arcu. Proin varius dui neque, non scelerisque dolor consequat in. In in
      dictum ante. Proin rutrum dui quis eros porttitor, vel tincidunt est pharetra. Donec tincidunt
      lobortis ante a egestas. Mauris pretium volutpat mi. Sed venenatis mauris sit amet libero
      pharetra, non congue diam molestie. Vivamus auctor velit vitae magna consectetur pretium.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a auctor ipsum. Phasellus in
      risus elit. Cras porttitor vestibulum neque, et luctus orci egestas cursus. Sed tempor purus
      urna, at posuere orci ultricies ac. Aenean at vulputate est. Vestibulum vitae felis sodales,
      porta erat ut, tempus dui. Nunc venenatis velit in nunc laoreet dignissim. Vestibulum dapibus
      nisl venenatis tortor tincidunt, non egestas erat tincidunt. Proin diam sem, accumsan ut orci
      in, lacinia dapibus arcu. Proin varius dui neque, non scelerisque dolor consequat in. In in
      dictum ante. Proin rutrum dui quis eros porttitor, vel tincidunt est pharetra. Donec tincidunt
      lobortis ante a egestas. Mauris pretium volutpat mi. Sed venenatis mauris sit amet libero
      pharetra, non congue diam molestie. Vivamus auctor velit vitae magna consectetur pretium.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a auctor ipsum. Phasellus in
      risus elit. Cras porttitor vestibulum neque, et luctus orci egestas cursus. Sed tempor purus
      urna, at posuere orci ultricies ac. Aenean at vulputate est. Vestibulum vitae felis sodales,
      porta erat ut, tempus dui. Nunc venenatis velit in nunc laoreet dignissim. Vestibulum dapibus
      nisl venenatis tortor tincidunt, non egestas erat tincidunt. Proin diam sem, accumsan ut orci
      in, lacinia dapibus arcu. Proin varius dui neque, non scelerisque dolor consequat in. In in
      dictum ante. Proin rutrum dui quis eros porttitor, vel tincidunt est pharetra. Donec tincidunt
      lobortis ante a egestas. Mauris pretium volutpat mi. Sed venenatis mauris sit amet libero
      pharetra, non congue diam molestie. Vivamus auctor velit vitae magna consectetur pretium.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a auctor ipsum. Phasellus in
      risus elit. Cras porttitor vestibulum neque, et luctus orci egestas cursus. Sed tempor purus
      urna, at posuere orci ultricies ac. Aenean at vulputate est. Vestibulum vitae felis sodales,
      porta erat ut, tempus dui. Nunc venenatis velit in nunc laoreet dignissim. Vestibulum dapibus
      nisl venenatis tortor tincidunt, non egestas erat tincidunt. Proin diam sem, accumsan ut orci
      in, lacinia dapibus arcu. Proin varius dui neque, non scelerisque dolor consequat in. In in
      dictum ante. Proin rutrum dui quis eros porttitor, vel tincidunt est pharetra. Donec tincidunt
      lobortis ante a egestas. Mauris pretium volutpat mi. Sed venenatis mauris sit amet libero
      pharetra, non congue diam molestie. Vivamus auctor velit vitae magna consectetur pretium.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a auctor ipsum. Phasellus in
      risus elit. Cras porttitor vestibulum neque, et luctus orci egestas cursus. Sed tempor purus
      urna, at posuere orci ultricies ac. Aenean at vulputate est. Vestibulum vitae felis sodales,
      porta erat ut, tempus dui. Nunc venenatis velit in nunc laoreet dignissim. Vestibulum dapibus
      nisl venenatis tortor tincidunt, non egestas erat tincidunt. Proin diam sem, accumsan ut orci
      in, lacinia dapibus arcu. Proin varius dui neque, non scelerisque dolor consequat in. In in
      dictum ante. Proin rutrum dui quis eros porttitor, vel tincidunt est pharetra. Donec tincidunt
      lobortis ante a egestas. Mauris pretium volutpat mi. Sed venenatis mauris sit amet libero
      pharetra, non congue diam molestie. Vivamus auctor velit vitae magna consectetur pretium.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a auctor ipsum. Phasellus in
      risus elit. Cras porttitor vestibulum neque, et luctus orci egestas cursus. Sed tempor purus
      urna, at posuere orci ultricies ac. Aenean at vulputate est. Vestibulum vitae felis sodales,
      porta erat ut, tempus dui. Nunc venenatis velit in nunc laoreet dignissim. Vestibulum dapibus
      nisl venenatis tortor tincidunt, non egestas erat tincidunt. Proin diam sem, accumsan ut orci
      in, lacinia dapibus arcu. Proin varius dui neque, non scelerisque dolor consequat in. In in
      dictum ante. Proin rutrum dui quis eros porttitor, vel tincidunt est pharetra. Donec tincidunt
      lobortis ante a egestas. Mauris pretium volutpat mi. Sed venenatis mauris sit amet libero
      pharetra, non congue diam molestie. Vivamus auctor velit vitae magna consectetur pretium.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a auctor ipsum. Phasellus in
      risus elit. Cras porttitor vestibulum neque, et luctus orci egestas cursus. Sed tempor purus
      urna, at posuere orci ultricies ac. Aenean at vulputate est. Vestibulum vitae felis sodales,
      porta erat ut, tempus dui. Nunc venenatis velit in nunc laoreet dignissim. Vestibulum dapibus
      nisl venenatis tortor tincidunt, non egestas erat tincidunt. Proin diam sem, accumsan ut orci
      in, lacinia dapibus arcu. Proin varius dui neque, non scelerisque dolor consequat in. In in
      dictum ante. Proin rutrum dui quis eros porttitor, vel tincidunt est pharetra. Donec tincidunt
      lobortis ante a egestas. Mauris pretium volutpat mi. Sed venenatis mauris sit amet libero
      pharetra, non congue diam molestie. Vivamus auctor velit vitae magna consectetur pretium.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a auctor ipsum. Phasellus in
      risus elit. Cras porttitor vestibulum neque, et luctus orci egestas cursus. Sed tempor purus
      urna, at posuere orci ultricies ac. Aenean at vulputate est. Vestibulum vitae felis sodales,
      porta erat ut, tempus dui. Nunc venenatis velit in nunc laoreet dignissim. Vestibulum dapibus
      nisl venenatis tortor tincidunt, non egestas erat tincidunt. Proin diam sem, accumsan ut orci
      in, lacinia dapibus arcu. Proin varius dui neque, non scelerisque dolor consequat in. In in
      dictum ante. Proin rutrum dui quis eros porttitor, vel tincidunt est pharetra. Donec tincidunt
      lobortis ante a egestas. Mauris pretium volutpat mi. Sed venenatis mauris sit amet libero
      pharetra, non congue diam molestie. Vivamus auctor velit vitae magna consectetur pretium.
    </p>
  </Fragment>
);

export default LandingPage;
