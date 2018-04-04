import React, { Component } from "react";
import { Link } from "react-router-dom";

class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: ""
    };

    this._handlePhoneNumber = this._handlePhoneNumber.bind(this);
    this._handleFirstName = this._handleFirstName.bind(this);
    this._handleLastName = this._handleLastName.bind(this);
    this._handleEmail = this._handleEmail.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _checkTypeAndSetState(value, state, type) {
    if (typeof value === type) {
      this.setState({
        [state]: value
      });
    }
  }

  _handlePhoneNumber(event) {
    this._checkTypeAndSetState(event.target.value, "phoneNumber", "string");
  }

  _handleFirstName(event) {
    this._checkTypeAndSetState(event.target.value, "firstName", "string");
  }

  _handleLastName(event) {
    this._checkTypeAndSetState(event.target.value, "lastName", "string");
  }

  _handleEmail(event) {
    this._checkTypeAndSetState(event.target.value, "email", "string");
  }

  _handleSubmit(event) {
    event.preventDefault();

    console.log("submitting");
  }

  render() {
    const { firstName, lastName, email, phoneNumber } = this.state;
    const {
      _handleEmail,
      _handleFirstName,
      _handleLastName,
      _handlePhoneNumber,
      _handleSubmit
    } = this;

    console.log("this.", this.state);
    return (
      <div>
        <form className="validation-grid" onSubmit={_handleSubmit}>
          <div>
            <h3>First Name </h3>
            <input value={firstName} onChange={_handleFirstName} />
          </div>
          <div>
            <h3>Last Name </h3>
            <input value={lastName} onChange={_handleLastName} />
          </div>
          <div>
            <h3>Email </h3>
            <input value={email} onChange={_handleEmail} />
          </div>
          <div>
            <h3>Phone Number </h3>
            <input value={phoneNumber} onChange={_handlePhoneNumber} />
          </div>
          <button><Link to="/done">Submit</Link></button>
        </form>
      </div>
    );
  }
}

export default Validation;
