import React, { Component } from "react";
import "./Notifier.css";

class Notifier extends Component {
  render() {
    const message = this.props.offline ? `App is offline!` : `Take a picture.`;

    return (
      <div className={`notify ${this.props.offline ? "danger" : ""}`}>
        <p>
          <em>{message}</em>
        </p>
      </div>
    );
  }
}

export default Notifier;
