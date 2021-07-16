import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="outter-form">
        <div className="inner-form">
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="d-flex first-wrap ">
              {" "}
              <div className="input-wrap ">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />{" "}
              </div>
              <div className="input-wrap">
                <input
                  type="text"
                  name="lastLame"
                  className="form-control"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />{" "}
              </div>
              <div className="input-wrap">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.handleChange}
                />{" "}
              </div>{" "}
              <div className="input-wrap">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />{" "}
              </div>
              <div className="input-wrap">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Repeat Password"
                />{" "}
              </div>
            </div>
          </form>
          <div>
            <input
              type="submit"
              id="login"
              className="login-btn"
              value="Login"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
