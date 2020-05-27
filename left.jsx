import React from "react";
import "./SettingLeftPage.style.scss";
import { Avatar, List, Skeleton } from "antd";
import { Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// import styled from "styled-components";

// import { SearchIcon, SearchInputLabelStyled } from "./SearchInputLabelStyled";

// import RefreshIcon from "shared/assets/icons/refresh.png";
import avatarTemp from "shared/assets/icons/circle.png";
import Button from "shared/components/uielements/button/Button";
import constant from "config/constant";

class SettingLeftPage extends React.Component {
  state = {
    data: [
      {
        id: 0,
        name: "Barry White",
      },
      {
        id: 1,
        name: "Barry White",
      },
      {
        id: 2,
        name: "Barry White",
      },
      {
        id: 3,
        name: "Barry White",
      },
      {
        id: 4,
        name: "Barry White",
      },
      {
        id: 4,
        name: "Barry White",
      },
      {
        id: 4,
        name: "Barry White",
      },
    ],
  };

  render() {
    const { data } = this.state;
    return (
      <div className="cdp_left_preview_sample-wrapper">
        <div className={"left-setting-header-wrapper"}>
          <div class="input-append">
            <i class="icon-zoom-in">
              <SearchOutlined />
            </i>
            <input type="text" placeholder="Search sources by name" />
          </div>

          <Button
            onClick={this.handleSaveSegment}
            BType={constant.BUTTON_TYPE.OUTLINE}
            style={{ height: "28px" }}
          >
            Add new
          </Button>
        </div>
        <div className="cdp_preview-sample-content">
          <List
            className="cdp_list-wrapper"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item className={"cdp_list-item"}>
                <Skeleton avatar title={false} loading={item.loading} active>
                  <div className={"cdp_list-item-left"}>
                    <Avatar src={avatarTemp} />
                    <span className={"cdp_list-item-title"}>Barry White</span>
                  </div>
                </Skeleton>
              </List.Item>
            )}
          />
        </div>
        <div></div>
      </div>
    );
  }
}

export default SettingLeftPage;
