import React, { Component } from "react";
import { connect } from "react-redux";

class Schedule extends Component {
  state = {};

  render() {
    console.log(this.props);
    return <div className="content">test</div>;
  }
}

const mapStateToProps = state => ({ data: state.dashboard });

export default connect(mapStateToProps)(Schedule);
