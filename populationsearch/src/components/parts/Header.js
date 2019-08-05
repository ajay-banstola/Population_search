import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1 style={pstyle}>Population Information Search </h1>
      </div>
    );
  }
}

const pstyle = {
  color: "brown",
  textDecorationLine: "underline"
};
