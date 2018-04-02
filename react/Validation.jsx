import React, { Component } from "react";

class Validation extends Component {
  render() {
    return (
      <div className="validation-grid">
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Email" />
        <input placeholder="Phone Number" />
        <button>Submit</button>
      </div>
    );
  }
}

export default Validation;
