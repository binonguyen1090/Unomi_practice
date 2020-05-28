import React from "react";
import "./SettingLeft.style.scss";
import { List, Avatar, Skeleton, Typography } from "antd";
import reqwest from "reqwest";
import avatarTemp from "shared/assets/icons/circle.png";
import { SearchOutlined } from "@ant-design/icons";
import constants from "config/constant";
import Button from "shared/components/uielements/button/Button";
import Category from './Category';
import Status from './Status';

const TopRightHeaderComponent = (props) => (
  <div className="setting-right-header-wrapper">
    AVATAR
  </div>
);
const ListHeaderComponent = (props) => (
  <div className="setting-left-header-wrapper">
    <div className="input-append">
      <i className="icon-zoom-in">
        <SearchOutlined />
      </i>
      <input type="text" placeholder="Search sources by name" />
    </div>

    <Button
      BType={constants.BUTTON_TYPE.SETTING_LEFT}
      style={{ height: "40px" }}
    >
      Add new
    </Button>
  </div>
);

class OtherEventComponent extends React.Component {
  state = {
    data: [
      {
        id: 0,
        name: "GoogleAds",
        status: "Enabled",
        category: ["ADVERTISING", "WEBSITE"],
      },
      {
        id: 1,
        name: "bameMon",
        status: "No Recent Data",
        category: ["ADVERTISING"],
      },
      {
        id: 2,
        name: "GoogleAds",
        status: "No Recent Data",
        category: ["ADVERTISING", "WEBSITE", "LOCAL"],
      },
      {
        id: 3,
        name: "GoogleAds",
        status: "Enabled",
        category: ["ADVERTISING"],
      },
      {
        id: 4,
        name: "GoogleAds",
        status: "Enabled",
        category: ["ADVERTISING"],
      },
      {
        id: 5,
        name: "GoogleAds",
        status: "Enabled",
        category: ["ADVERTISING"],
      },
      {
        id: 6,
        name: "GoogleAds",
        status: "No Recent Data",
        category: ["ADVERTISING"],
      },
    ],
  };
  render() {
    const {data} = this.state
    
    return (
      <div className={"setting-left-wrapper"}>
        
        <ListHeaderComponent />
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Avatar shape="square" size={56} />
              <Category cat={item.category}/>
              <Status status={item.status} />
              
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default OtherEventComponent;
