import React, { Component } from "react";
import "./NavbarnotLoggedin.css";
import Button from "@material-ui/core/Button";

export default class NavbarLoggedin extends Component {
  state = { isAuthenticated: this.props.props };
  handleClick = event => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };
  render() {
    // const handleClick = e => {
    //   e.preventDefault();
    //   let isAuthenticated = this.props.props;
    //   console.log(isAuthenticated);
    //   isAuthenticated = !isAuthenticated;
    //   console.log(isAuthenticated);
    // this.setState(isAuthenticated => {
    //   return {
    //     isAuthenticated: !isAuthenticated
    //   };
    // });}

    console.log(this.props.props);
    return this.state.isAuthenticated === true ? (
      <div>
        <nav>
          <ul>
            <li>
              <Button
                style={{ color: "white", background: "black" }}
                name="Home"
                variant="outlined"
              >
                Home
              </Button>
            </li>
            <li>
              <Button
                style={{ color: "white", background: "black" }}
                className="Contact"
                variant="outlined"
              >
                Country
              </Button>
            </li>
            <li>
              <Button
                style={{ color: "white", background: "black" }}
                className="Contact"
                variant="outlined"
              >
                City
              </Button>
            </li>
            <li>
              <Button
                style={{ color: "white", background: "black" }}
                className="Contact"
                variant="outlined"
              >
                Population
              </Button>
            </li>

            <li style={{ float: "right" }}>
              <Button href="#" onClick={this.handleClick}>
                Logout
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    ) : (
      <div>
        <nav>
          <ul>
            <li>
              <Button
                style={{ color: "white", background: "black" }}
                name="Home"
                variant="outlined"
              >
                Home
              </Button>
            </li>
            <li style={{ float: "right" }}>
              <Button href="#" onClick={this.handleClick}>
                Login
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

/* <nav>
          <ul>
            <li>
              {}
              <Button name="Home" variant="outlined">
                Home
              </Button>
            </li>
            <li>
              <Button className="Contact" variant="outlined">
                Country
              </Button>
            </li>
            <li>
              <Button className="Contact" variant="outlined">
                City
              </Button>
            </li>
            <li>
              <Button className="Contact" variant="outlined">
                Population
              </Button>
            </li>

            <li style={{ float: "right" }}>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </li>
          </ul>
        </nav> */
