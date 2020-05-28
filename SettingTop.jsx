import React from "react";
import "./SettingTop.style.scss";
import { Avatar } from "antd";
import BellIcon from "shared/assets/icons/bell.png";
import UserSquareIcon from "shared/assets/icons/user-square.png";

class SettingTop extends React.Component {
  render() {
    return (
      <div className="topbar-wrapper">
        <div className="topbar-title">
          <h3>Data Source</h3>
        </div>
        <div className="topbar-action-right">
          <div className="topbar-item-right">
            <Avatar src={BellIcon} shape="square" />
          </div>
          <div className="topbar-item-right">
            <Avatar src={UserSquareIcon} shape="square" />
          </div>
        </div>
      </div>
    );
  }
}

export default SettingTop;
