

import React from "react";
import "./SettingPage.style.scss";
import SidebarContainer from "shared/containers/sidebar/Sidebar";
import SettingTop from "./SettingTop";
import SettingLeft from "./SettingLeft";
import SettingRight from "./SettingRight";
import { Row, Col } from "antd";
import { Layout } from "antd";
import LeftRightSetting from "./Left_Right_Setting";

import WrapperContainer from "shared/containers/wrapper/WrapperContainer";
import SegmentStepComponent from "shared/containers/segment/Segment";
import { Debounce } from "react-throttle";
import WindowResizeListener, {
  withWindowSizeListener,
} from "react-window-size-listener";

const { Content, Sider } = Layout;

class SettingPage extends React.Component {
  render() {
    return (
      <Layout>
        <Debounce time="1000" handler="onResize">
          <WindowResizeListener onResize={(windowSize) => {}} />
        </Debounce>
        <Sider id={"sidebar-left"} className="sidebar-container">
          <SidebarContainer active={5} />
        </Sider>
        <Layout>
          <SettingTop />
          <Content>
            <div className="setting-content">
              <div className="setting-item cdp_33per">
                <SettingLeft/>
              </div>
              <div className="setting-item cdp_66per">
                <SettingRight/>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withWindowSizeListener(SettingPage);
