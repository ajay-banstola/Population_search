import React, { Component } from "react";
import NavbarLoggedin from "../parts/NavbarLoggedin";
import Header from "../parts/Header";
import Formfield from "../parts/Formfield";
import Test from "./Test";
import "./FormInput.css";

import Final from "../parts/Final";
// import NavbarnotLoggedin from "../parts/NavbarnotLoggedin";

class FormInput extends Component {
  state = {
    isAuthenticate: false,
    // rows: [
    //   {
    id: "45",
    Country: "Nepal",
    City: "Kathmandu",
    Age: "Young",
    Male_Population: 32434234,
    Female_Population: 23323,
    rows: []
    //   }
    // ]
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
    // const rows = [
    //   {
    //     id: "45",
    //     Country: "Nepal",
    //     City: "Kathmandu",
    //     Age: "Young",
    //     Male_Population: 32434234,
    //     Female_Population: 23323
    //   }
    // ];
    return (
      <div className="Content">
        <Header />
        {renderwala}
        <Final />
        {/* <Test rows={this.state.rows} /> */}
        {/* onSubmit={data => {
            setRows(currentRows => [
              ...currentRows,
              {
                id: 4,
                ...data
              }
            ]);
          }}  */}
        {/* <Formfield /> */}
        {/* {console.log(this.state.rows)} */}
        {/* <MyTable rows={this.state.rows} /> */}
      </div>
    );
  }
}

export default FormInput;
