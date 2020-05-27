import React from "react";
import "./SettingsPage.style.scss";
import SettingLeftPage from "./SettingLeftPage.style.scss";

import SidebarContainer from "shared/containers/sidebar/Sidebar";
import SettingTopContainer from "shared/containers/topbar/SettingsContainer";

import { Layout } from "antd";
import WindowResizeListener, {
  withWindowSizeListener,
} from "react-window-size-listener";

const { Content, Sider } = Layout;

class SettingsPage extends React.Component {
  render() {
    return (
      <Layout>
        <Sider id={"sidebar-left"}>
          <SidebarContainer active={2} />
        </Sider>
        <Layout>
          <SettingTopContainer />
          <SettingLeftPage />
          <Content></Content>
        </Layout>
      </Layout>
    );
  }
}

export default SettingsPage;
