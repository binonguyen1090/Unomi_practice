import React from "react";

export default class Category extends React.Component {
  
  render() {
    const { cat } = this.props;
    let item = cat.map(i => {
        return <div className="cat-item">{i}</div>
    })
    return (<div className="category">{item}</div>);
  }
}
