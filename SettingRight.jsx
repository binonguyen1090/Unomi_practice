import React from "react";
import "./SettingRight.style.scss";
import { Form, Input } from "antd";
import Button from "shared/components/uielements/button/Button";
import constant from "config/constant";

const { TextArea } = Input;

const ListHeaderComponent = (props) => (
  <div className={"cdp_list-header-wrapper"}>
    <h2 className={"cdp_list-header-title"}>Basic Settings</h2>
  </div>
);

class SettingRight extends React.Component {
  render() {
    // const { dataForm } = this.state;
    return (
      <div>
        <div className={"cdp_detail-header-wrapper"}>
          <h2 className={"cdp_detail-header-title"}>Avatar</h2>
        </div>

        <div className={"cdp_segment_detail-wrapper"}>
          <ListHeaderComponent />
          <div className="cdp_segment_form-container">
            <div className="cdp_segment-form-data">
              <Form
                // onFinish={this.onFinish}
                // layout={"vertical"}
                // initialValues={{
                //   name: dataForm.name,
                //   url: dataForm.url,
                //   description: dataForm.description,
                // }}
              >
                <div className="cdp_form-wrapper-inline">
                  <Form.Item
                    // style={{width: 324}}
                    className="cdp_segment_ip-form-item"
                    label="NICKNAME"
                    name="name"
                    rules={[
                      {
                        // required: false,
                        // message: 'The input is required!',
                      },
                    ]}
                  >
                    <Input placeholder="Identify your source" />
                    <div className="cdp_form-ip-description">
                      <span>
                        Pick a name to help you identify source in Segment.
                      </span>
                    </div>
                  </Form.Item>
                  <Form.Item
                    // style={{width: 324}}
                    label="WEBSITE URL"
                    name="url"
                    className="cdp_segment_ip-form-item"
                    rules={[
                      {
                        // required: false,
                        // type: 'url',
                        // message: 'The input is not valid url!',
                      },
                    ]}
                  >
                    <Input placeholder="/" />
                    <div className="cdp_form-ip-description">
                      <span>The full URL where analytics .js is installed</span>
                    </div>
                  </Form.Item>
                </div>
                <div className="cdp_form-wrapper-full-width">
                  <Form.Item
                    name="description"
                    label="LABELS"
                    style={{ width: "100%" }}
                  >
                    <div className="cdp_form-item-ip-label-description">
                      <span>Optional</span>
                    </div>
                    <TextArea
                      rows={4}
                      placeholder="Add Labels and seperate them by commas"
                    />
                    <div className="cdp_form-ip-description">
                      <span>
                        Set labels to help organize and filter your sources, as
                        well as enforce ,pre granular access prmissions.
                      </span>
                    </div>
                  </Form.Item>
                </div>
                <Form.Item hidden={true}>
                  <Button
                    id="btn-submit-segment-form"
                    type="primary"
                    htmlType="submit"
                    BType={constant.BUTTON_TYPE.DEFAULT}
                  ></Button>
                </Form.Item>
              </Form>
            </div>
            <div className="cdp_separator-line"></div>
            <div className="setting-detail-group-button">
            <div className="cdp_btn-setting-delete-submit">
              <Button
                onClick={this.handleSaveSegment}
                type="danger"
                htmlType="submit"
                BType={constant.BUTTON_TYPE.OUTLINE}
              >
                DELETE
              </Button>
            </div>
            <div className="cdp_btn-setting-detail-submit">
              <Button
                onClick={this.handleSaveSegment}
                type="primary"
                htmlType="submit"
                BType={constant.BUTTON_TYPE.BACKGROUND}
              >
                Save Changes
              </Button>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    );
  }
}

// const WrappedSegmentDetailContainer= Form.create({ name: 'SegmentDetailForm' })(SegmentDetailContainer);
export default SettingRight;
