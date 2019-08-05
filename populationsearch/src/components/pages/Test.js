import React, { Component } from "react";
import NumericInput from "react-numeric-input";

class Test2 extends Component {
  state = {
    countries: [
      { name: "Nepal", cities: ["Kathmandu", "Bhaktapur", "Lalitpur"] },
      { name: "India", cities: ["New-Delhi", "Calcutta", "Mumbai"] },
      { name: "China", cities: ["Xing ping", "Lua shing", "Chouw ming"] }
    ],
    age: [
      {
        name: "Child"
      },
      {
        name: "Young"
      },
      {
        name: "Old"
      }
    ],
    selectedCountry: "Nepal"
  };
  handleChange = e => {
    console.log(this.state);
    this.setState({ selectedCountry: e.target.value });
    console.log(this.state);
  };

  render() {
    let country = this.state.countries.filter(country => {
      return country.name === this.state.selectedCountry;
    });

    return (
      <div>
        <form>
          <h3>Country name</h3>
          <select
            value={this.state.selectedCountry}
            onChange={this.handleChange.bind(this)}
          >
            {this.state.countries.map((country, i) => {
              return <option key={i}>{country.name}</option>;
            })}
          </select>
          <h3>City/State</h3>
          <select>
            {country[0].cities.map((city, i) => {
              return <option key={i}>{city}</option>;
            })}
          </select>
          <h3>Age group</h3>
          <select>
            {this.state.age.map((age1, i) => {
              return <option key={i}>{age1.name}</option>;
            })}
          </select>
          <h3>Population</h3>
          Male: <NumericInput min={0} />
          Female: <NumericInput min={0} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Test2;
