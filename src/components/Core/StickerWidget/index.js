import React, { Component } from 'react';
import { Icon } from 'antd';
import { StickerWidgetStyle } from './style';

const StickerWidget = props => {
  const { fontColor, bgColor, width, icon, number, text } = props;
  const textColor = {
    color: fontColor,
  };
  const widgetStyle = {
    backgroundColor: bgColor,
    width,
  };
  const iconStyle = {
    color: fontColor,
  };
  return (
    <StickerWidgetStyle className="carlsbadStickerWidget" style={widgetStyle}>
      <div className="carlsbadIconWrapper">
        <Icon type={icon} theme="outlined" style={iconStyle} />
      </div>

      <div className="carlsbadContentWrapper">
        <h3 className="carlsbadStatNumber" style={textColor}>
          {number}
        </h3>
        <span className="carlsbadLabel" style={textColor}>
          {text}
        </span>
      </div>
    </StickerWidgetStyle>
  );
};

export default StickerWidget;
