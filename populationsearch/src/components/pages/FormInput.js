import React, { Component } from "react";
import NavbarLoggedin from "../parts/NavbarLoggedin";
import Header from "../parts/Header";
import Formfield from "../parts/Formfield";
import Test from "./Test";
import "./FormInput.css";
import MyTable from "../parts/MyTable.tsx";
// import NavbarnotLoggedin from "../parts/NavbarnotLoggedin";

class FormInput extends Component {
  state = {
    isAuthenticate: false
  };

  render() {
    var renderwala;
    console.log(this.state.isAuthenticate);
    renderwala = <NavbarLoggedin props={this.state.isAuthenticate} />;
    // if (this.state.isAuthenticate) {
    //   renderwala = <NavbarLoggedin props={this.state.isAuthenticate} />;
    // } else {
    //   renderwala = <NavbarnotLoggedin props={this.state.isAuthenticate} />;
    // }
    return (
      <div className="Content">
        <Header />
        {renderwala}
        <Test />
        {/* <Formfield /> */}
        <MyTable
          rows={[
            {
              id: 23,
              Country: "Nepal",
              City: "Kathmandu",
              Age: "Young",
              Male_Population: 322323,
              Female_Population: 232321
            }
          ]}
        />
      </div>
    );
  }
}

export default FormInput;
