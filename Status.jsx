import React from "react";

export default class Status extends React.Component {
  
  render() {
    const {status} = this.props
    return <div className="status">{status}</div>;
  }
}
